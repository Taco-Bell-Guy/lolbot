module.exports = {
	name: 'purge',
	description: 'Purge messages',
	execute(message, args) {
		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('Invalid Number.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('Choose the ammount of messages you want deleted');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('Error while running this commandss');
		});
	},
};