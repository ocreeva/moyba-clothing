import { addAuthStateChangedCallback } from "services/auth";
import { createOrReadUserData } from "services/storage";
import { setUser } from ".";

import type { Unsubscribe } from "firebase/auth";
import type { AppDispatch } from "App/store";
import type { IRegistrationProperties } from "./userSlice.types";

export const authStateChangedEffect: (dispatch: AppDispatch, registrationProperties: IRegistrationProperties) => Unsubscribe =
    (dispatch, registrationProperties) =>
        addAuthStateChangedCallback(async user => {
            if (!user) {
                dispatch(setUser({ auth: undefined, data: undefined }));
                return;
            }

            const { uid } = user;
            const auth = { uid };

            const data = await createOrReadUserData(user, registrationProperties);

            dispatch(setUser({ auth, data }));
        });
