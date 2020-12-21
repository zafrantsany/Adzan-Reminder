import { data } from "../../store"
    import moment from "moment"
    export let now;
    export let activePrayer;
    let prayer;
    let locationDropdownActive = false;
    let themeDropdownActive = false;

    function toggleLocationDropdown() {
        locationDropdownActive = !locationDropdownActive;
        if (themeDropdownActive && locationDropdownActive) {
            themeDropdownActive = false;
        }
    }

    function toggleThemeDropdown() {
        themeDropdownActive = !themeDropdownActive;
        if (themeDropdownActive && locationDropdownActive) {
            locationDropdownActive = false;
        }
    }

    function hideAllDropdown() {
        themeDropdownActive = false;
        locationDropdownActive = false;
    }

    function changeTheme(theme) {
        data.changeTheme(theme);
        themeDropdownActive = false;
    }

    $: {
        const nextPrayer = $data.prayerTimes.slice(activePrayer.index, 5);
        const prevPrayer = $data.prayerTimes.slice(0, activePrayer.index);

        prayer = [...nextPrayer, ...prevPrayer]
    }

    let inputQuery = "";
    $: city = $data.city;

    async function handleLocate() {
        // isloading
        const position = await data.locate()
        if (position) {
            city = await data.getCity(position.latitude, position.longitude);
            await data.setUserLocationData(position.latitude, position.longitude);
            window.location.reload()
        }
        // isnotloading
    }

    async function search() {
        if (inputQuery && inputQuery.length > 3) {
            const position = await data.search(inputQuery)
            city = position.city;
            await data.setUserLocationData(position.latitude, position.longitude);
            inputQuery = ""
            locationDropdownActive = false;
        }
    }

    function handleQueryKeydown(evt) {
        if (evt.key === "Enter") {
            search();
        }
    }