import React from "react";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            new: undefined;
            colabs: {
                team_id: string;
            }
        }
    }
}