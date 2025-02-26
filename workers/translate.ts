import { pipeline } from '@xenova/transformers'

const task = 'translation'
const model = 'Xenova/nllb-200-distilled-600M'

export async function translate() {
    const translator = await pipeline(task, model)
    const translation = await translator('Hello from web worker!', {
        tgt_lang: 'spa_Latn',
        src_lang: 'eng_Latn',
    })

    return translation
}
