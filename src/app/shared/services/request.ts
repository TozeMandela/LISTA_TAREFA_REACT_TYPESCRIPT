import { Api } from "./Api"
import { ApiException } from "./apiException";

export interface IdataProps {
    id:string,
    name: string,
    descrition: string,
    author: string,
    date: string,
    hour: string,
    status: string,
    [key: string]: string|undefined,
}

const getAll = async ():Promise<IdataProps[]| ApiException> => {
    try {
        const {data} = await Api().get('/tarefas');
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'erro ao pegar os dados da bd')
    }
}

const getOne = async (id: string):Promise<IdataProps | ApiException> => {
    try {
        const {data} = await Api().get(`/tarefas/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'erro ao pegar os dados da bd')
    }
}

const Delete = async (id: string):Promise<IdataProps | ApiException> => {
    try {
        const {data} = await Api().delete(`/tarefas/${id}`);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'erro ao pegar o dados da bd')
    }
}

const updated = async (obj: IdataProps):Promise<IdataProps[]| ApiException> => {
    try {
        const {data} = await Api().put(`/tarefas/${obj.id}`, obj);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'erro ao actualizar os dados na bd')
    }
}

const add = async (obj: Omit<IdataProps, 'id'>): Promise<IdataProps | ApiException> => {
    try {
        const { data } = await Api().post('/tarefas', obj);
        return data;
    } catch (error: any) {
        return new ApiException(error.message || 'erro ao registrar');
    }
}

export const tarefasServices = {
    add,
    getAll,
    getOne,
    updated,
    Delete,
}