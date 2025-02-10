import { makeAutoObservable } from "mobx";
import { getSeminars } from "../api/seminars";

/**
 * Хранилище данных.
 * Для создания испоьзовался mobx, так как у него простое api
*/
class SeminarsState {
    isLoading = false;
    isError = false;
    seminars = [];

    constructor() {
        makeAutoObservable(this);
    }

    setIsLoading(newIsLoading) { this.isLoading = newIsLoading; }
    setSeminars(newSeminars) { this.seminars = newSeminars; }
    setError(newIsError) { this.isError = newIsError; }

    updateSeminars() {
        this.setIsLoading(true);
        
        Promise.resolve()
            .then(async () => this.setSeminars(await getSeminars()))
            .catch((e) => this.setError(e))
            .finally(() => this.setIsLoading(false))
    }
}

export const seminarsState = new SeminarsState();
