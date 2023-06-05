<template>
<div class="welcome-banner__wrapper">
  <div class="welcome-banner__left-figure">Добро пожаловать в</div>
  <div class="welcome-banner__right-figure">библиофонд.</div>
</div>
</template>

<script>
export default {
  name: 'WelcomeBanner',
};
</script>

<style lang="scss" scoped>
.welcome-banner {
  &__wrapper {
    position: relative;
    width: 600px;
    height: 400px;
    margin: 64px auto;
  }

  &__left-figure {
    position: absolute;
    padding: 48px;
    height: 204px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    font-size: 32px;
    font-weight: 100;

    background: rgb(37,140,80);
    background: linear-gradient(330deg, rgba(37,140,80,1) 0%, rgba(121,153,92,1) 35%, rgba(200,246,255,1) 100%);
    border-radius: 46% 54% 70% 30% / 30% 50% 50% 70%;

    animation: vibrate 14s linear 0s infinite normal forwards;
  }

  &__right-figure {
    position: absolute;
    
    height: 124px;
    right: 30px;
    top: 169px;
    padding: 32px 48px 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 2;


    color: white;

    font-size: 48px;
    font-weight: 200;

    background: rgb(140,37,103);
    background: linear-gradient(330deg, rgba(140,37,103,1) 0%, rgba(210,105,30,1) 35%, rgba(255,240,164,1) 100%);
    border-radius: 68% 32% 32% 68% / 45% 50% 50% 57%;

    animation: vibrate 20s ease-out 1s infinite alternate backwards;
  }
  
}

@keyframes vibrate {
	0% {
		transform: translate(0);
	}

	10% {
		transform: translate(-2px, -2px);
	}

	20% {
		transform: translate(2px, -2px);
	}

	30% {
		transform: translate(-2px, 2px);
	}

	40% {
		transform: translate(2px, 2px);
	}

	50% {
		transform: translate(-2px, -2px);
	}

	60% {
		transform: translate(2px, -2px);
	}

	70% {
		transform: translate(-2px, 2px);
	}

	80% {
		transform: translate(-2px, -2px);
	}

	90% {
		transform: translate(2px, -2px);
	}

	100% {
		transform: translate(0);
	}
}
</style>