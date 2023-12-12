// bandage: number[기술의 시전 시간, 1초당 회복량, 추가 회복량]
// health: number 최대 체력
// attacks: number[몬스터의 공격 시간, 피해량]
// return: 모든 공격이 끝난 직후 남은 체력 || 체력이 0 이하가 되면 -1

function solution(bandage, health, attacks) {
  const [bandageTime, healPerSec, bonusHeal] = bandage;
  let currentHealth = health;

  // 첫번째 공격
  currentHealth -= attacks[0][1];

  if (currentHealth <= 0) return -1;

  if (currentHealth > health) {
    currentHealth = health;
  }

  for (let i = 1; i < attacks.length; i += 1) {
    const [attackTime, damage] = attacks[i];
    const prevAttackTime = attacks[i - 1][0];

    currentHealth += (attackTime - prevAttackTime - 1) * healPerSec;

    // 공격시간 텀이 연속시전보다 크거나 같으면 추가 회복
    if (attackTime - prevAttackTime - 1 >= bandageTime) {
      currentHealth +=
        bonusHeal * parseInt((attackTime - prevAttackTime - 1) / bandageTime);
    }

    // 현재 체력이 최대 체력보다 높으면 현재 체력 초기화
    if (currentHealth > health) {
      currentHealth = health;
    }

    // 피해량 만큼 체력 감소
    currentHealth -= damage;
    if (currentHealth <= 0) return -1;
  }

  return currentHealth;
}
