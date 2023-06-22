let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let vn = './media/Invocar.mp3'
let pesan = args.join` `
let oi = `*Charlie Funade* ${pesan}`
let teks = `〔 *${wm}* 〕\n *𝐇𝐀𝐁𝐋𝐄 𝐇𝐃𝐏 ¿𝐐𝐔𝐄 𝐄𝐒𝐏𝐄𝐑𝐀?, ¿𝐔𝐍𝐀 𝐈𝐍𝐕𝐈𝐓𝐀𝐂𝐈𝐎𝐍?* \n\n ${oi}\n\n *𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀𝐒:*\n`
for (let mem of participants) {
teks += `♥️😼 @${mem.id.split('@')[0]}\n`}
teks += `└ @emx._xit\n\n*♥️🫂*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
conn.sendFile(m.chat, vn, 'Invocar.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler

