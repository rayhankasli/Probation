 /**
  * @author Rayhan Kasli
  * @description model class for data binding
  */
export class ResumeBuilder {

    /** id  contain unique id of user */
    public id: number;
    /** name contain name of user */
    public name: string;
    /** address contain address of user */
    public address: string;
    /** dateOfBirth contain dateOfBirth of user */
    public dateOfBirth: Date;
    /** contactno contain user contact number */
    public contactno: string;
    /** nationality contain user nationality */
    public nationality: string;
    /**education of user */
    public education: string;
    /**skills of user */
    public skills: string;
    /** yearsOfExperince contain experince of user */
    public yearsOfExperince: number;
    /** resume of user  */
    public resume: string;
}
export class Eduction {
    /** id  contain unique id of user */
    public id: number;
    /**educatoion of user */
    public education: string;
}
export class Skills {
    /** id  contain unique id of user */
    public id: number;
    /**skills of user */
    public skill: string;
}

