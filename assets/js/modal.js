const groupAHTML = `
  <h2 class="text-xl font-semibold mb-4">Accepted Documents – Group A</h2>
  <p class="text-sm text-gray-600 mb-4">Select at least 1 document from Group A.</p>

  <ul class="space-y-3 text-gray-700 text-sm">
    <li>• Passport</li>
    <li>• Irish passport card</li>
    <li>• EU, Norway, Iceland or Liechtenstein biometric identity card</li>
    <li>• UK biometric residence permit (BRP)</li>
    <li>• UK biometric residence card (BRC)</li>
    <li>• UK accredited PASS card</li>
    <li>• UK or EU driver digital tachograph card</li>
    <li>• UK, Channel Islands, Isle of Man or EU photocard driving licence</li>
    <li>• UK HM Forces ID Card</li>
    <li>• UK HM Armed Forces Veteran Card</li>
    <li>• UK Frontier Worker Permit</li>
    <li>• Government-issued photographic work permit</li>
    <li>• Photographic immigration document</li>
    <li>• Photographic Visa</li>
    <li>• UK, Channel Islands and Isle of Man Firearms Licence</li>
    <li>• Photographic ID listed on PRADO (international identity docs)</li>
  </ul>
`;

const groupBHTML = `
  <h2 class="text-xl font-semibold mb-4">Accepted Documents – Group B</h2>
  <p class="text-sm text-gray-600 mb-4">Select at least 1 document from Group B.</p>

  <ul class="space-y-3 text-gray-700 text-sm">
    <li>• Birth or adoption certificate</li>
    <li>• Marriage or civil partnership certificate</li>
    <li>• Non-photographic immigration document</li>
    <li>• Non-photographic visa</li>
    <li>• Non-photographic work permit</li>
    <li>• Bank or building society statement</li>
    <li>• UK local authority or social housing rental agreement (current address)</li>
    <li>• Mortgage statement (current address)</li>
    <li>• UK council tax statement (current address)</li>
    <li>• Utility bill (current address)</li>
  </ul>
`;
const groupABHTML = `
  <h2 class="text-xl font-semibold mb-4">Accepted Documents – Group A & B</h2>
  <p class="text-sm text-gray-600 mb-4">Select at least 1 document from Group A and 1 document from Group B.</p>

  <ul class="space-y-3 text-gray-700 text-sm">
    <li>• Birth or adoption certificate</li>
    <li>• Marriage or civil partnership certificate</li>
    <li>• Non-photographic immigration document</li>
    <li>• Non-photographic visa</li>
    <li>• Non-photographic work permit</li>
    <li>• Bank or building society statement</li>
    <li>• UK local authority or social housing rental agreement (current address)</li>
    <li>• Mortgage statement (current address)</li>
    <li>• UK council tax statement (current address)</li>
    <li>• Utility bill (current address)</li>
    <li>• Passport</li>
    <li>• Irish passport card</li>
    <li>• EU, Norway, Iceland or Liechtenstein biometric identity card</li>
    <li>• UK biometric residence permit (BRP)</li>
    <li>• UK biometric residence card (BRC)</li>
    <li>• UK accredited PASS card</li>
    <li>• UK or EU driver digital tachograph card</li>
    <li>• UK, Channel Islands, Isle of Man or EU photocard driving licence</li>
    <li>• UK HM Forces ID Card</li>
    <li>• UK HM Armed Forces Veteran Card</li>
    <li>• UK Frontier Worker Permit</li>
    <li>• Government-issued photographic work permit</li>
    <li>• Photographic immigration document</li>
    <li>• Photographic Visa</li>
    <li>• UK, Channel Islands and Isle of Man Firearms Licence</li>
    <li>• Photographic ID listed on PRADO (international identity docs)</li>
  </ul>
`;

document.addEventListener("DOMContentLoaded", () => {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContent = document.getElementById("tabContent");

  const tabs = {
    groupA: groupAHTML,
    groupB: groupBHTML,
    groupAB: groupABHTML
  };

  // Default tab
  tabContent.innerHTML = tabs.groupA;
  setTimeout(() => tabContent.style.opacity = "1", 80);

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {

      tabButtons.forEach(b => b.classList.remove("active-tab"));
      btn.classList.add("active-tab");

      const tabKey = btn.getAttribute("data-tab");

      // fade-out then fade-in
      tabContent.style.opacity = "0";
      setTimeout(() => {
        tabContent.innerHTML = tabs[tabKey];
        tabContent.style.opacity = "1";
      }, 180);
    });
  });
});
