const client = new Luno({
    key: 'fa3whb9ur4gry',
    secret: 'kHgGszWQ3bvWRGpqcZnUFmqkioWRQxMrjBJ1wMlohIM',
    defaultPair: 'XBTZAR'
 })
client.getOrder(1234).then(console.log).catch(console.log)