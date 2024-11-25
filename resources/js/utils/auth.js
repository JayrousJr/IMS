import { usePage } from "@inertiajs/react";

export function isManager() {
    const { auth } = usePage().props;
    if (auth.globaluserdata.data.role.name == "Manager") {
        return true;
    }
    return false;
}
export function user() {
    const { auth } = usePage().props;
    return auth.globaluserdata.data;
}
