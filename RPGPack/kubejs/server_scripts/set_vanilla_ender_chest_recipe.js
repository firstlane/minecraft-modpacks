// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// ServerEvents.recipes(event => {
//     event.replaceInput(
//         { input: 'minecraft:ender_chest' }, // filter for ender chest recipe
//         'enlightened_end:malachite',        // replace malachite
//         'minecraft:obsidian'                // with obsidian
//     )
// })

ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:ender_chest', 1),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:obsidian',
            B: 'minecraft:ender_eye'
        }
    )
})
