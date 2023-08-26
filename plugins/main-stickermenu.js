let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = `
╔━━━『 *Sticker Menu* 』
┃ ⬡ .attp <teks>
┃ ⬡ .bonk
┃ ⬡ .getexif
┃ ⬡ .qc
┃ ⬡ .sticker
┃ ⬡ .s
┃ ⬡ .toimg
┃ ⬡ .tovideo
┃ ⬡ .ttp2
┃ ⬡ .ttp
┃ ⬡ .wm
╚━━━━━━━━━━━━✧
 _2023 © VynaaMD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['stikermenu']
handler.tags = ['main']
handler.command = /^(stikermenu)$/i

export default handler