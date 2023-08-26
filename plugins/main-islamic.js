let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = `
╔━━━『 *Islamic Menu* 』
┃ ⬡ .asmaulhusna
┃ ⬡ .ayatkursi
┃ ⬡ .salat <daerah>
┃ ⬡ .niatsholat
╚━━━━━━━━━━━━✧
 _2023 © VynaaMD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['islamic']
handler.tags = ['main']
handler.command = /^(islamic)$/i

export default handler