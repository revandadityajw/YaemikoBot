let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = `
╔━━━『 *Game Menu* 』
┃ ⬡ .caklontong
┃ ⬡ .family100
┃ ⬡ .iqtest
┃ ⬡ .math
┃ ⬡ .siapakahaku
┃ ⬡ .suit
┃ ⬡ .susunkata
┃ ⬡ .tebakanime
┃ ⬡ .tebakbendera
┃ ⬡ .tebakchara
┃ ⬡ .tebaksurah
┃ ⬡ .tekateki
┃ ⬡ .tebakkata
┃ ⬡ .tictactoe
┃ ⬡ .ttt
┃ ⬡ .fightkucing
┃ ⬡ .hunter
┃ ⬡ .attack
┃ ⬡ .atk
┃ ⬡ .war
╚━━━━━━━━━━━━✧
 _2023 © VynaaMD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['gamemenu']
handler.tags = ['main']
handler.command = /^(gamemenu)$/i

export default handler