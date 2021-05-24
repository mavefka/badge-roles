const discord = require('discord.js')
const Client = new discord.Client


client.on("ready", () => {
    console.log('bot deployed!')
})

client.once("message", msg => {


let flaggie = msg.author.flags
if (flaggie.any('PARTNERED_SERVER_OWNER')) {
   let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'partneredroleid')
    let stableumut = msg.guild.member(member)

stableumut. roles.add(partner)


} if (flaggie.any('DISCORD_EMPLOYEE')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'staffroleid')
    let stableumut = msg.guild.member(member)

stableumut. roles.add(partner)

} if (flaggie.any('HYPESQUAD_EVENTS')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'hypesquadeventsroleid')
    let stableumut = msg.guild.member(member)

stableumut. roles.add(partner)

}  if (flaggie.any('BUGHUNTER_LEVEL_1')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'bughunterroleid')
    let stableumut = msg.guild.member(member)

stableumut. roles.add(partner)

}  if (flaggie.any('HOUSE_BRAVERY')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'hypebraveryroleid')
    let stableumut = msg.guild.member(member)

stableumut. roles.add(partner)

}  if (flaggie.any('HOUSE_BRILLIANCE')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'hypebrillanceroleid')
    let stableumut = msg.guild.member(member)

stableumut. roles.add(partner)

}  if (flaggie.any('HOUSE_BALANCE')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'hypebalanceroleid')
    let stableumut = msg.guild.member(member)

stableumut. roles.add(partner)

} if (flaggie.any('EARLY_SUPPORTER')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'earlysupporterroleid')
    let stableumut = msg.guild.member(member)

stableumut. roles.add(partner)

} if (flaggie.any('TEAM_USER')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'teamuserroleid')
    let stableumut = msg.guild.member(member)

stableumut. roles.add(partner)

} if (flaggie.any('BUGHUNTER_LEVEL_2')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'bughuntergoldroleid')
    let stableumut = msg.guild.member(member)

stableumut. roles.add(partner)

} if (flaggie.any('VERIFIED_DEVELOPER')) {
    let member = msg.author
    const partner = msg.guild.roles.cache.find(r => r.id === 'verifieddeveloperroleid')
    let stableumut = msg.guild.member(member)

stableumut. roles.add(partner)

}

    }
 )

client.login('token login')
