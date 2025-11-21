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

function openDocumentsModal(contentHTML) {
  const modal = document.getElementById("documentsModal");
  const box = modal.querySelector(".doc-modal-box");

  document.getElementById("documentsModalContent").innerHTML = contentHTML;

  modal.classList.remove("hidden");

  // animate in
  setTimeout(() => {
    box.classList.remove("scale-95", "opacity-0");
    box.classList.add("scale-100", "opacity-100");
  }, 10);
}

function closeDocumentsModal() {
  const modal = document.getElementById("documentsModal");
  const box = modal.querySelector(".doc-modal-box");

  // animate out
  box.classList.remove("scale-100", "opacity-100");
  box.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 200);
}

// click outside to close
document.getElementById("documentsModal").addEventListener("click", function(e) {
  if (e.target.id === "documentsModal") closeDocumentsModal();
});