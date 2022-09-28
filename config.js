const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// Other
global.namabot = ['Null Console']
global.namaowner = ['LuisNerd - JuniorNerd - Trick']
global.owner = ['555194373811']
global.premium = ['555194373811']
global.packname = 'NullBot'
global.author = 'WhatsApp Bot'
global.sessionName = 'zxyn'
global.prefa = ['.']
global.sp = '⭔'
global.mess = {
    success: 'SUCESSO',
    admin: 'APENAS OS ADMS',
    botAdmin: 'BOT TEM QUE SER ADM',
    owner: 'APENAS O DONO',
    group: 'APENAS EM GRUPOS',
    private: 'APENAS NO PRIVADO',
    bot: 'PARA O USÚARIO DO BOT',
    wait: 'carregando...',
    endLimit: '.-.',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/zxyn.jpg')
global.thumb2 = fs.readFileSync('./lib/name.jpg')
global.thumb3 = fs.readFileSync('./lib/oi.zip')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
