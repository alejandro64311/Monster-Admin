export class BaseState{
    loading: boolean;
    message: Message;
    
}
export class Message{
    constructor(public text,public  type){ 
    }
}