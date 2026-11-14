import { Note } from "../../model/Note.mjs";

let notes = [] as Array<Note>;

notes.push(new Note({
    date_created: new Date("2022-11-14"),
    note: `Catch up with the party.`
}));

console.log(notes);