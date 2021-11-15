import { createSelector } from "reselect";

const selectWorkcase = state => state.portofolio;

export const selectPortofolio = createSelector(
    [selectWorkcase],
    portofolio => portofolio.products
);

