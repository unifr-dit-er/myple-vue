<template>
  <footer class="footer p-10 bg-neutral text-neutral-content">
    <div>
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-open-source" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 3a9 9 0 0 1 3.618 17.243l-2.193 -5.602a3 3 0 1 0 -2.849 0l-2.193 5.603a9 9 0 0 1 3.617 -17.244z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-n" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M7 20v-16l10 16v-16"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-t" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M6 4l12 0"></path>
          <path d="M12 4l0 16"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-letter-e" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M17 4h-10v16h10"></path>
          <path d="M7 12l8 0"></path>
        </svg>
      </div>
      <p>
        {{ $t('dev') }} <a class="link link-accent" href="https://www.unifr.ch/nte/fr/">DIT-NTE</a>
        <br/>{{ $t('educational_contents') }} <a class="link link-accent" href="https://www.unifr.ch/uni/fr/organisation/acad/didactique-universitaire/">{{ $t('didanum') }}</a>
      </p>
    </div>
    <div>
      <span class="footer-title">Copyright</span>
      <div>
        <div>
          <div class="flex items-center">
            <IconCreativeCommons />
            <IconCreativeCommonsBy />
            <IconCreativeCommonsNc />
            <IconCreativeCommonsSa />
          </div>
          <div>
            <a href="https://creativecommons.org/licenses/by-nc-sa/3.0/ch/deed.fr" class="link">
              {{ $t('copyright') }}
              <br>{{ $t('copyright2') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>