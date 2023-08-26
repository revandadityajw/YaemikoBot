let handler = async (m, { conn }) => {
let fotonya = 'https://telegra.ph/file/f5742305fdf673f056e91.jpg'
let sewa = `
╔━━━『 *Main Menu* 』
┃ ⬡ .ai
┃ ⬡ .openai
┃ ⬡ .sewa
┃ ⬡ .simi
┃ ⬡ .bannedlist
┃ ⬡ .botstatus
┃ ⬡ .owner
┃ ⬡ .creator
┃ ⬡ .listgc
┃ ⬡ .ping
┃ ⬡ .report
┃ ⬡ .request
┃ ⬡ .rules
┃ ⬡ .runtime
┃ ⬡ .sewa
┃ ⬡ .sewa
┃ ⬡ .server
┃ ⬡ .totalfitur
┃ ⬡ .tqto
┃ ⬡ .user
┃ ⬡ .afk
┃ ⬡ .ceksn
┃ ⬡ .daftar
┃ ⬡ .register
┃ ⬡ .fakespam
┃ ⬡ .botstatus
┃ ⬡ .menfess
┃ ⬡ .menu
┃ ⬡ .menu2
┃ ⬡ .unregister
┃ ⬡ .profile
┃ ⬡ .store
╚━━━━━━━━━━━━✧

 _2023 © VynaaMD_
`
conn.reply(m.chat, sewa, m)
}
handler.help = ['ownermenu']
handler.tags = ['main']
handler.command = /^(ownermenu)$/i

export default handler