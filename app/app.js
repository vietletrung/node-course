//const add = require('./utils.js')
const val = require('validator')
const chalk = require('chalk')

const yargs = require('yargs')
const notes = require('./notes.js')

const { describe, argv } = require('yargs')

//const sum = add(1,2)
//const greenmsg = chalk.red.inverse.bold('this is viet')
//console.log(greenmsg)
//console.log(val.isEmail('viet@abc.com'))
yargs.version('1.1.0')

yargs.command({
    command: 'add',
    describe: 'add a note',
    builder: {
        title: {
        describe: 'title',
        demandOption: true,
        type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
            }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
        describe: 'title',
        demandOption: true,
        type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


yargs.command({
    command: 'list',
    describe: 'list all note',
    handler(argv){
        notes.listNote()
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a note',
    handler: function(){
        console.log('removing a new note')
    }
})

yargs.parse()
//console.log(yargs.argv)
//console.log('get the command:')
//console.log(yargs.argv[0])