
export interface NoteArguments {
    date_created: Date | undefined;
    note: string;
}

export class Note {

    readonly date_created: Date;
    readonly note: string;

    constructor(args: NoteArguments) {
        this.date_created = args.date_created ? args.date_created : new Date();
        this.note = args.note;
    }
}