let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = `
╔━━━『 *Maker Menu* 』
┃ ⬡ .flaming1 <text>
┃ ⬡ .flaming4 <text>
┃ ⬡ .agedetect
┃ ⬡ .logo-coffee <text>
┃ ⬡ .butterfly <text>
┃ ⬡ .carved-wood <text>
┃ ⬡ .iluminated <text>
┃ ⬡ .flaming2 <text>
┃ ⬡ .flaming3 <text>
┃ ⬡ .flaming5 <text>
┃ ⬡ .flaming6 <text>
┃ ⬡ .carved <text>
┃ ⬡ .shadowsky <text>
┃ ⬡ .pictlove <text>
┃ ⬡ .tahta <teks>
┃ ⬡ .hornycard
┃ ⬡ .hornylicense
┃ ⬡ .itssostupid
┃ ⬡ .kaneki
┃ ⬡ .loliggo
┃ ⬡ .nekosad
┃ ⬡ .nekosad
┃ ⬡ .simpcard
┃ ⬡ .ytcomment
┃ ⬡ .ytkomen
╚━━━━━━━━━━━━✧

 _2023 © VynaaMD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['makermenu']
handler.tags = ['main']
handler.command = /^(makermenu)$/i

export default handler