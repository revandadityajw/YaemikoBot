let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = `
╔━━━『 *Internet Menu* 』
┃ ⬡ .artic
┃ ⬡ .bukalapak
┃ ⬡ .charagi
┃ ⬡ .cuaca
┃ ⬡ .fetch
┃ ⬡ .get
┃ ⬡ .gempa
┃ ⬡ .githubsearch
┃ ⬡ .gimage
┃ ⬡ .google
┃ ⬡ .heroml
┃ ⬡ .jadwalbola
┃ ⬡ .lk21search
┃ ⬡ .liriklagu
┃ ⬡ .mahasiswa
┃ ⬡ .playstore
┃ ⬡ .soundsearch
┃ ⬡ .ssweb
┃ ⬡ .wattpad
┃ ⬡ .wikipedia
┃ ⬡ .wikimedia
┃ ⬡ .xnxxsearch
┃ ⬡ .monitor
┃ ⬡ .katanime
┃ ⬡ .renungan
┃ ⬡ .chord
┃ ⬡ .jadwaltv
┃ ⬡ .webcek
┃ ⬡ .wikipedia <apa>
╚━━━━━━━━━━━━✧
 _2023 © VynaaMD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['internet']
handler.tags = ['main']
handler.command = /^(internet)$/i

export default handler