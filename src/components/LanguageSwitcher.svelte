<script>
    import { setCookie } from '../modules/cookie.js';
    import { docLanguages } from '../modules/language-store.js'

    
    let langs = [];
    const unsubscribe = docLanguages.subscribe(value => {
        console.log('switcher: ',value)
		langs = value;
    });
    // unsubscribe();

    import { locale } from 'svelte-i18n';
    let group= $locale;

    $:setLocale(group);
    function setLocale(language) {
        console.log('setlocale', language)
        if (typeof window !== 'undefined') {
            setCookie('locale', language);
        }
    }
</script>

<style>
    :root {
        --deep-blue: #1e3470;
        --speed3: cubic-bezier(0.26, 0.48, 0.08, 0.9);
        --height: 30px;
    }

    .language-switcher {
        display: flex;
        align-items: center;
        position: relative;
    }
    
    .language-switcher input {
        appearance: none;
        display: none;
    }

    .language-switcher .select {
        height: var(--height);
        width: var(--height);
        border-radius: 50vw;
        font-size: calc(var(--height) / 2.5);
        color: #fff;
        mix-blend-mode: difference;    
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: center;
    }

    .language-switcher .current {
        background-color: white;
        color: black;
    }
</style>

<div class="language-switcher">
	{#each $docLanguages as lang}
		<label class="select {lang == group ? 'current' : 'notcurrent'}">
            <input type=radio bind:group value={lang}>
            {lang.toUpperCase()}
        </label>
	{/each}
</div>
<!-- <span>{$docLanguages} {group}</span> -->