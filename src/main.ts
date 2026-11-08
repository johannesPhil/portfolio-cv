import './style.css';

type LayerId = 1 | 2 | 3;

interface LayerDetails {
  title: string;
  description: string;
  icon: string;
}

const layerDetails: Record<LayerId, LayerDetails> = {
  1: {
    title: 'Tier 01 // Interface Layer',
    description: 'Add a concise description of how a user action moves through your interface.',
    icon: 'devices',
  },
  2: {
    title: 'Tier 02 // Service & Data Layer',
    description: 'Add a concise description of the application logic and data stores involved.',
    icon: 'dns',
  },
  3: {
    title: 'Tier 03 // Cloud & Delivery Layer',
    description: 'Add a concise description of how the application is deployed and operated.',
    icon: 'cloud_done',
  },
};

const layerControls = document.querySelectorAll<HTMLButtonElement>('button[data-layer]');
const layerCards = document.querySelectorAll<HTMLElement>('.layer-card[data-layer-card]');
const stageTitle = document.querySelector<HTMLElement>('#stage-title');
const stageDescription = document.querySelector<HTMLElement>('#stage-desc');
const stageIcon = document.querySelector<HTMLElement>('#stage-icon');
const simulateButton = document.querySelector<HTMLButtonElement>('#simulate-request');
const simulateLabel = simulateButton?.querySelector<HTMLElement>('[data-simulate-label]');

function parseLayerId(value: string | undefined): LayerId | null {
  if (value === '1' || value === '2' || value === '3') {
    return Number(value) as LayerId;
  }

  return null;
}

function selectLayer(layerId: LayerId): void {
  layerControls.forEach((control) => {
    const isSelected = control.dataset.layer === String(layerId);
    control.setAttribute('aria-pressed', String(isSelected));
  });

  layerCards.forEach((card) => {
    card.dataset.active = String(card.dataset.layerCard === String(layerId));
  });

  const details = layerDetails[layerId];
  if (stageTitle) stageTitle.textContent = details.title;
  if (stageDescription) stageDescription.textContent = details.description;
  if (stageIcon) stageIcon.textContent = details.icon;
}

layerControls.forEach((control) => {
  control.addEventListener('click', () => {
    const layerId = parseLayerId(control.dataset.layer);
    if (layerId) selectLayer(layerId);
  });
});

async function simulateRequestFlow(): Promise<void> {
  if (!simulateButton || simulateButton.disabled) return;

  simulateButton.disabled = true;
  if (simulateLabel) simulateLabel.textContent = 'Tracing request...';

  for (const layerId of [1, 2, 3] as const) {
    selectLayer(layerId);
    await new Promise<void>((resolve) => window.setTimeout(resolve, 1100));
  }

  if (simulateLabel) simulateLabel.textContent = 'Trace complete';
  simulateButton.disabled = false;
}

simulateButton?.addEventListener('click', () => {
  void simulateRequestFlow();
});