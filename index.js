const { Telegraf, Markup } = require('telegraf')
const { message } = require('telegraf/filters')
require('dotenv').config()
const text = require("./const")
const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply(`Привет ${ctx.message.from.first_name ? ctx.message.from.first_name : 'незнакомец'}!`))
bot.help((ctx) => ctx.reply(text.command))

bot.command('books', async (ctx)=> {
    try {
        await ctx.replyWithHTML('<b>Темы</b>', Markup.inlineKeyboard(
            [
                [Markup.button.callback('Медицина', 'btn_1'), Markup.button.callback('Психология', 'btn_2')], 
                [Markup.button.callback('Лингвистика', 'btn_3'), Markup.button.callback('Инженерия', 'btn_4')],
                [Markup.button.callback('Экология', 'btn_5')]
            ]
        ))
    } catch (e) {
        console.error(e)
    }
})
bot.action('btn_1', async (ctx)=> {
        try {
            await ctx.answerCbQuery()
            await ctx.replyWithHTML('Книга: <em>«The Emperor of All Maladies: A Biography of Cancer»</em>\n' + 'Автор: Siddhartha Mukherjee\n' + 'Описание: Эта книга представляет собой биографию рака, исследуя его историю, лечение и влияние на общество.')
        } catch (e) {
            console.error(e)
        }
    })
bot.action('btn_2', async (ctx)=> {
        try {
            await ctx.answerCbQuery()
            await ctx.replyWithHTML('Книга: <em>«Thinking, Fast and Slow»</em>\n' + 'Автор: Daniel Kahneman\n' + 'Описание: В этой книге Нобелевский лауреат Даниэль Канеман объясняет две системы мышления: быструю и интуитивную, а также медленную и аналитическую.')
        } catch (e) {
            console.error(e)
        }
    })
bot.action('btn_3', async (ctx)=> {
        try {
            await ctx.answerCbQuery()
            await ctx.replyWithHTML('Книга: <em>«The Power of Babel: A Natural History of Language»</em>\n' + 'Автор: John H. McWhorter  \n' + 'Описание: Эта книга исследует происхождение языков, их эволюцию и разнообразие, а также то, как языки влияют на культуру.')
        } catch (e) {
            console.error(e)
        }
    })
bot.action('btn_4', async (ctx)=> {
        try {
            await ctx.answerCbQuery()
            await ctx.replyWithHTML('Книга: <em>«The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution»</em>\n' + 'Автор: Walter Isaacson\n' + 'Описание: Книга рассказывает о людях, которые стояли за созданием современных технологий и цифровой революции, от первых компьютеров до интернета.')
        } catch (e) {
            console.error(e)
        }
    })
bot.action('btn_5', async (ctx)=> {
        try {
            await ctx.answerCbQuery()
            await ctx.replyWithHTML('Книга: <em>«The Sixth Extinction: An Unnatural History»</em>\n' + 'Автор: Elizabeth Kolbert\n' + 'Описание: В этой книге исследуется текущая массовая вымирание видов, вызванное деятельностью человека, и его последствия для планеты.           ')
        } catch (e) {
            console.error(e)
        }
    })


bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))