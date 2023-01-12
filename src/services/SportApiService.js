import ApiService from "./ApiService";

export default class SportApiService extends ApiService {
    
    constructor() {
        super('/sport')
    }

    create(object) {
        return this.post('', object);
    }

    update(id, object) {
        return this.put(`/${id}`, object);
    }

    delete(id) {
        return super.delete(`/${id}`);
    }

    find(id) {
        return this.get(`/${id}`);
    }

    addSportsFavorite(sportId, user_id_Db) {
        return this.patch(`/addSportsFavorite/add/${sportId}`, user_id_Db);
    }

    /* se usarmos filtros. Por hora pegamos apenas os objetos existentes no banco ou por ID.
    find(params) {
        return this.get(`${params}`);
    }
    */
}