import { Wllama } from "./node_modules/@wllama/wllama/esm/index.min.js";

let wllama = null;
let controller = null;

onmessage = async (event) => {
    if (! wllama.isModelLoaded()) {
        postMessage(['content', 'Model not yet loaded.']);
        return;
    }
    controller?.abort();
    await new Promise(resolve => setTimeout(resolve, 100));
    if (event.data === null) {
        return;
    }
    controller = new AbortController();
    const response = await wllama.createChatCompletion({
        messages: [{ role: "user", content: event.data }],
        temperature: 1.0, min_p: 0.0, top_p: 0.95, top_k: 64,
        max_tokens: 1024, stream: true, timings_per_token: true,
        abortSignal: controller.signal
    });
    for await (const chunk of response) {
        if (controller.signal.aborted) {
            break;
        }
        postMessage(['content', chunk.choices[0].delta.content ?? ""]);
        postMessage(['reasoning', chunk.choices[0].delta.reasoning_content ?? ""]);
        postMessage(['progress', chunk.timings?.prompt_per_second.toFixed(2) + " pt/s " +
            chunk.timings?.predicted_per_second.toFixed(2) + " t/s"]);
    }
}

wllama = new Wllama({ default: "./node_modules/@wllama/wllama/esm/wasm/wllama.wasm" });
await wllama.loadModelFromUrl("./models/gemma-4-E2B-it-qat-UD-Q4_K_XL.gguf", {
    n_ctx: 4096, n_gpu_layers: 9999, reasoning: false,
    progressCallback: ({ loaded, total }) => postMessage(['progress', Math.round((loaded / total) * 100) + "%"])
});
postMessage(['progress', 'loaded.']);
