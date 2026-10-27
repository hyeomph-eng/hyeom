const menuToggle = document.querySelector('.menu-toggle');
const primaryNav = document.querySelector('.primary-nav');

menuToggle?.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  primaryNav.classList.toggle('is-open', !expanded);
});

primaryNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle?.setAttribute('aria-expanded', 'false');
    primaryNav.classList.remove('is-open');
  });
});

function activateTab(group, tabName) {
  document.querySelectorAll(`[data-tab-group="${group}"] [data-tab]`).forEach((button) => {
    const active = button.dataset.tab === tabName;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-selected', String(active));
  });

  document.querySelectorAll(`[data-panel-group="${group}"]`).forEach((panel) => {
    const active = panel.dataset.panel === tabName;
    panel.classList.toggle('is-active', active);
    panel.hidden = !active;
    if (active) {
      panel.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
    }
  });
}

document.querySelectorAll('[data-tab-group]').forEach((tabList) => {
  const group = tabList.dataset.tabGroup;
  tabList.querySelectorAll('[data-tab]').forEach((button) => {
    button.addEventListener('click', () => activateTab(group, button.dataset.tab));
  });
});

document.querySelectorAll('[data-market-target]').forEach((link) => {
  link.addEventListener('click', () => {
    const market = link.dataset.marketTarget;
    activateTab('services', market);
    activateTab('price', market);
  });
});

document.querySelectorAll('.filter-tab').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-tab').forEach((tab) => tab.classList.toggle('is-active', tab === button));
    document.querySelectorAll('.case-card').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.region !== filter;
    });
  });
});

const cases = {
  tryEverything: {
    title: 'Try Everything',
    description: '글로벌 스타트업 행사의 온라인 마케팅과 채널 운영을 진행했습니다.',
    items: ['행사 온라인 마케팅', 'SNS 채널 운영', '광고 운영', '게스트·인플루언서 섭외']
  },
  seoulDesign: {
    title: '서울디자인어워드',
    description: '서울디자인어워드의 온라인 마케팅과 채널 운영을 진행했습니다.',
    items: ['행사 온라인 마케팅', 'SNS 채널 운영', '광고 운영', '게스트·인플루언서 섭외']
  },
  spa: {
    title: '필리핀 한인 마사지·스파 A',
    description: '현지 고객과 한국인 방문객 모두에게 업체의 분위기와 서비스를 효과적으로 전달할 수 있도록 콘텐츠와 광고를 운영했습니다.',
    items: ['인스타그램 피드 기획 및 제작', '게시물 문구 작성', 'Meta 스폰서 광고 운영', '광고 반응 확인 및 소재 조정']
  },
  event: {
    title: '서울 어린이 디자인 행사',
    description: '행사 일정과 모집 기간에 맞춰 SNS, 광고, 커뮤니티 홍보를 하나의 일정으로 관리했습니다.',
    items: ['인스타그램 채널 및 피드 관리', '스폰서 광고 운영', '맘카페 섭외 및 광고 제안', '온라인 커뮤니티 배포']
  },
  beauty: {
    title: '국내 1인 피부관리업체 A',
    description: '적은 규모로도 꾸준히 운영할 수 있도록 콘텐츠 제작과 체험단, 외부 홍보 업무를 나누어 진행했습니다.',
    items: ['인스타그램 콘텐츠 제작', '체험단 운영', '언론기사 작성 및 송출', '스폰서 광고 준비']
  },
  startup: {
    title: '경기스타트업서밋',
    description: '행사 일정과 주요 프로그램에 맞춰 온라인 마케팅과 채널 운영을 진행했습니다.',
    items: ['행사 온라인 마케팅', 'SNS 채널 운영', '광고 운영', '게스트·인플루언서 섭외']
  },
  ddp: {
    title: 'DDP 디자인위크',
    description: '행사 기간에 맞춰 온라인 홍보, SNS와 광고 운영을 진행했습니다.',
    items: ['행사 온라인 마케팅', 'SNS 채널 운영', '광고 운영', '게스트·인플루언서 섭외']
  }
};

const modal = document.querySelector('#case-modal');
const modalTitle = document.querySelector('#modal-title');
const modalDescription = document.querySelector('#modal-description');
const modalList = document.querySelector('#modal-list');

document.querySelectorAll('[data-case]').forEach((button) => {
  button.addEventListener('click', () => {
    const item = cases[button.dataset.case];
    if (!item || !modal) return;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    modalList.innerHTML = `<ul>${item.items.map((entry) => `<li>${entry}</li>`).join('')}</ul>`;
    modal.showModal();
  });
});

document.querySelector('.modal-close')?.addEventListener('click', () => modal?.close());
modal?.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
