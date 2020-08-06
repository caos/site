<script>
    import { goto } from '@sapper/app';

    let group= 'en';
    $: setLocale(group);

    function setLocale(language) {
        if (typeof window !== 'undefined') {
            goto('/'+language);
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
        width: calc(var(--height) * 2);
        height:  var(--height);

        -webkit-transition: transform 0.17s var(--speed3);
        -moz-transition: transform 0.17s var(--speed3);
        -ms-transition: transform 0.17s var(--speed3);
        -o-transition: transform 0.17s var(--speed3);
        transition: transform 0.17s var(--speed3);
    }
    
    .language-switcher input {
        appearance: none;
        display: none;
    }

    .language-switcher .select-de,
    .language-switcher .select-en {
        position: absolute;
        font-size: calc(var(--height) / 2.5);
        top: 50%;
        transform: translateY(-50%);
        color: #fff;
        mix-blend-mode: difference;    
    }

    .language-switcher .select-de {
        z-index: 10;
        left: 6px;
    }
        
    .language-switcher .select-en {
        z-index: 10;
        right: calc(var(--height) / 4);
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 3px 64px rgba(var(--deep-blue), .1);
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: var(--height);
        width: var(--height);
        left: 0;
        bottom: 0;
        background-color: white;
        box-shadow: 0 3px 64px rgba(var(--deep-blue), .16);
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .right {
        -webkit-transform: translateX(var(--height));
        -ms-transform: translateX(var(--height));
        transform: translateX(var(--height));
    }

    .slider.round {
        border-radius: var(--height);
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>

<div class="language-switcher">
    <span class="slider round {group=='en' ? 'right' : 'left'}"></span>
    <label class="select-de">
        <input type=radio bind:group value="de">
        DE
    </label>
    <label class="select-en">
        <input type=radio bind:group value="en">
        EN
    </label>
</div>
