import {Response} from 'express';


export const errorMessage = async (res:Response, statusCode:number,msg:string ) => {
    res.status(statusCode).json({
		status:false,
		data:null,
		message:msg
	})
};

export const somethingWentWrong =async (res:Response) => {
     res.status(400).json({
		status:false,
		data:null,
		message:'Something went wrong !'
	})
}

export const successMessage = async (res:Response ,data:any, msg:string) => {

	if(!data){
		res.status(200).json({
			status:true,
			data:[],
			message:msg
		})
	}else{
		res.status(200).json({
			status:true,
			data:data,
			message:msg
		})
	}
	
}
