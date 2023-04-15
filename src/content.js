import moment from 'moment';

// Header
const header = document.createElement('div');
header.style.padding = '0 30px';
header.style.height = '50px';
header.style.display = 'flex';
header.style.justifyContent = 'flex-end';
header.style.alignItems = 'center';
header.style.backgroundColor = '#A7A7A9';

// Modal toggle Btn
const commentModalBtn = document.createElement('button');
commentModalBtn.innerText = 'Comment';
commentModalBtn.style.width = 'fit-content';
commentModalBtn.style.height = '30px';
commentModalBtn.style.padding = '0 8px';
commentModalBtn.style.display = 'flex';
commentModalBtn.style.justifyContent = 'center';
commentModalBtn.style.alignItems = 'center';
commentModalBtn.style.border = 'none';
commentModalBtn.style.borderRadius = '12px';
commentModalBtn.style.cursor = 'pointer';

// Connect Btn
const connectBtn = document.createElement('button');
connectBtn.setAttribute('id', 'connectBtn');
connectBtn.innerText = 'Connect';
connectBtn.style.width = 'fit-content';
connectBtn.style.height = '30px';
connectBtn.style.padding = '0 8px';
connectBtn.style.display = 'flex';
connectBtn.style.justifyContent = 'center';
connectBtn.style.alignItems = 'center';
connectBtn.style.marginLeft = '15px';
connectBtn.style.border = 'none';
connectBtn.style.borderRadius = '12px';
connectBtn.style.cursor = 'pointer';

// Container
const commentContainer = document.createElement('div');
commentContainer.setAttribute('id', 'commentContainer');
commentContainer.style.width = '100vw';
commentContainer.style.height = '100vh';
commentContainer.style.position = 'absolute';
commentContainer.style.top = '0';
commentContainer.style.left = '0';
commentContainer.style.zIndex = '999';
commentContainer.style.display = 'none';

// Bg
const commentContainerBg = document.createElement('div');
commentContainerBg.style.width = '100%';
commentContainerBg.style.height = '100%';
commentContainerBg.style.position = 'fixed';
commentContainerBg.style.top = '0';
commentContainerBg.style.left = '0';
commentContainerBg.style.backgroundColor = 'rgba(0,0,0,.5)';

// Bg
const commentListContainerBg = document.createElement('div');
commentListContainerBg.style.width = '100%';
commentListContainerBg.style.height = '100%';
commentListContainerBg.style.position = 'fixed';
commentListContainerBg.style.top = '0';
commentListContainerBg.style.left = '0';
commentListContainerBg.style.backgroundColor = 'rgba(0,0,0,.5)';

// Show comment modal
const commentModal = document.createElement('div');
commentModal.style.backgroundColor = 'white';
commentModal.style.padding = '15px 20px';
commentModal.style.width = '300px';
commentModal.style.height = '300px';
commentModal.style.position = 'fixed';
commentModal.style.top = '50%';
commentModal.style.left = '50%';
commentModal.style.transform = 'translate(-50%, -50%)';
commentModal.style.zIndex = '999';
commentModal.style.borderRadius = '20px';

// Title
const commentModalTitle = document.createElement('h4');
commentModalTitle.innerText = 'Comment';
commentModalTitle.style.color = '#333';

// Input
const commentInput = document.createElement('textarea');
commentInput.setAttribute('id', 'commentInput');
commentInput.style.width = '100%';
commentInput.style.margin = 'auto';
commentInput.style.height = '60%';
commentInput.style.resize = 'none';
commentInput.style.backgroundColor = 'white';
commentInput.style.color = '#333';
commentInput.style.padding = '8px 12px';
commentInput.style.outline = 'none';
commentInput.style.boxSizing = 'border-box';
commentInput.setAttribute('placeholder', 'Please leave your comment');

// Submit button
const submitBtnRow = document.createElement('div');
submitBtnRow.style.display = 'flex';
submitBtnRow.style.justifyContent = 'flex-end';

const submitButton = document.createElement('button');
submitButton.style.padding = ' 4px 8px';
submitButton.style.cursor = 'pointer';
submitButton.style.marginTop = '10px';
submitButton.innerText = 'Submit';
submitBtnRow.append(submitButton);

// Mount components
commentContainer.append(commentModal);
commentContainer.append(commentContainerBg);
commentModal.append(commentModalTitle);
commentModal.append(commentInput);
commentModal.append(submitBtnRow);

// Check comment button
const checkCommentButton = document.createElement('button');
checkCommentButton.setAttribute('id', 'checkCommentButton');
checkCommentButton.style.width = 'fit-content';
checkCommentButton.style.height = '30px';
checkCommentButton.style.padding = '0 8px';
checkCommentButton.style.display = 'flex';
checkCommentButton.style.justifyContent = 'center';
checkCommentButton.style.alignItems = 'center';
checkCommentButton.style.marginLeft = '15px';
checkCommentButton.style.border = 'none';
checkCommentButton.style.borderRadius = '12px';
checkCommentButton.style.cursor = 'pointer';

// Comment List Container
const commentListContainer = document.createElement('div');
commentListContainer.style.width = '100vw';
commentListContainer.style.height = '100vh';
commentListContainer.style.position = 'absolute';
commentListContainer.style.top = '0';
commentListContainer.style.left = '0';
commentListContainer.style.zIndex = '999';
commentListContainer.style.display = 'none';

// Title
const commentListModalTitle = document.createElement('h4');
commentListModalTitle.innerText = 'Comment List';
commentListModalTitle.style.color = '#333';

// Comment List
const commentList = document.createElement('div');
commentList.setAttribute('id', 'commentList');
commentList.style.backgroundColor = 'white';
commentList.style.padding = '15px 20px';
commentList.style.width = '300px';
commentList.style.height = '300px';
commentList.style.position = 'fixed';
commentList.style.top = '50%';
commentList.style.left = '50%';
commentList.style.transform = 'translate(-50%, -50%)';
commentList.style.borderRadius = '20px';
commentList.style.overflow = 'scroll';

commentList.append(commentListModalTitle);
commentListContainer.append(commentListContainerBg);
commentListContainer.append(commentList);

// Token Amount
const tokenAmount = document.createElement('div');
tokenAmount.style.marginLeft = '10px';

// Token Value
const tokenValue = document.createElement('div');
tokenValue.innerText = '1CHRV =  0.000042 Dai';
tokenValue.style.marginLeft = '10px';
tokenValue.style.fontSize = '12px';

// History Btn
const historyListBtn = document.createElement('button');
historyListBtn.innerText = 'History';
historyListBtn.style.width = 'fit-content';
historyListBtn.style.height = '30px';
historyListBtn.style.padding = '0 8px';
historyListBtn.style.display = 'flex';
historyListBtn.style.justifyContent = 'center';
historyListBtn.style.alignItems = 'center';
historyListBtn.style.marginLeft = '15px';
historyListBtn.style.border = 'none';
historyListBtn.style.borderRadius = '12px';
historyListBtn.style.cursor = 'pointer';

// History Container
const historyContainer = document.createElement('div');
historyContainer.style.width = '100vw';
historyContainer.style.height = '100vh';
historyContainer.style.position = 'absolute';
historyContainer.style.top = '0';
historyContainer.style.left = '0';
historyContainer.style.zIndex = '999';
historyContainer.style.display = 'none';

// Bg
const historyContainerBg = document.createElement('div');
historyContainerBg.style.width = '100%';
historyContainerBg.style.height = '100%';
historyContainerBg.style.position = 'fixed';
historyContainerBg.style.top = '0';
historyContainerBg.style.left = '0';
historyContainerBg.style.backgroundColor = 'rgba(0,0,0,.5)';

// History modal
const historyModal = document.createElement('div');
historyModal.setAttribute('id', 'historyModal');
historyModal.style.backgroundColor = 'white';
historyModal.style.padding = '15px 20px';
historyModal.style.width = '300px';
historyModal.style.height = '300px';
historyModal.style.position = 'fixed';
historyModal.style.top = '50%';
historyModal.style.left = '50%';
historyModal.style.transform = 'translate(-50%, -50%)';
historyModal.style.zIndex = '999';
historyModal.style.borderRadius = '20px';

historyContainer.append(historyContainerBg);
historyContainer.append(historyModal);

// Mount Components
document.body.prepend(commentContainer);
document.body.prepend(header);
document.body.prepend(commentListContainer);
document.body.prepend(historyContainer);
header.append(commentModalBtn);
header.append(checkCommentButton);
header.append(historyListBtn);
header.append(connectBtn);
header.append(tokenAmount);
header.append(tokenValue);

const connect = async () => {
  const account = await ethereum.send('eth_requestAccounts');
  if (account) {
    connectBtn.innerText = account.result[0];
    generateToken(account.result[0]);
  }
};

const showCommentModal = () => {
  const commentContainer = document.getElementById('commentContainer');
  commentContainer.style.display = 'block';
};

const showCommentList = () => {
  commentListContainer.style.display = 'block';
};

const showHistoryList = () => {
  getUserCommentHistory();
};

const storeComment = () => {
  if (connectBtn.innerText === 'Connect') {
    alert('Please connect wallet first');
    return;
  }

  const address = document.getElementById('connectBtn').innerText;
  let tokenAmount = localStorage.getItem(address);
  if (!tokenAmount || tokenAmount <= 0) {
    alert('Not able to leave a comment');
    return;
  }

  const comment = document.getElementById('commentInput').value;
  let stored = localStorage.getItem(window.location);

  let obj = {
    comment,
    user: connectBtn.innerText,
    time: moment().format('YYYY-MM-DD HH:mm:ss'),
  };

  if (stored) {
    stored = JSON.parse(stored);
    stored.push(obj);
  } else {
    stored = [obj];
  }

  localStorage.setItem(window.location, JSON.stringify(stored));
  alert('success');
  tokenAmount = tokenAmount - 10;
  localStorage.setItem(address, tokenAmount);
  commentContainer.style.display = 'none';
  commentInput.value = '';
  getList();
  generateToken(address);
  storeUserCommentHistory(address, window.location.href);
};

const closeContainer = () => {
  commentContainer.style.display = 'none';
  commentListContainer.style.display = 'none';
  historyContainer.style.display = 'none';
  commentInput.value = '';
};

const getList = () => {
  let list = localStorage.getItem(window.location);

  let test;
  test = function d() {
    alert('x');
  };

  if (list) {
    list = JSON.parse(list);
    let str = '';
    list.forEach((element) => {
      const block = document.createElement('div');
      const comment = document.createElement('div');
      comment.innerText = element.comment;

      const user = document.createElement('div');
      user.innerText = `${element.user.substring(
        0,
        4
      )} ... ${element.user.slice(-4)}`;
      user.style.fontSize = '12px';
      user.style.opacity = '.5';
      user.style.marginTop = '10px';

      const time = document.createElement('span');
      time.innerText = element.time;
      time.style.fontSize = '12px';
      time.style.marginLeft = '10px';

      block.append(comment);
      user.append(time);
      block.append(user);

      block.style.borderBottom = 'solid 1px rgba(0,0,0,.5)';
      block.style.marginTop = '10px';
      block.style.paddingBottom = '5px';

      const button = document.createElement('button');
      button.innerText = 'Vote';
      button.style.marginLeft = '10px';
      button.style.cursor = 'pointer';
      button.addEventListener('click', () => {
        const tipper = connectBtn.innerText;
        if (tipper == 'Connect') {
          alert('Please connect your wallet first');
          return;
        }

        let target = localStorage.getItem(element.user);

        if (!target) {
          localStorage.setItem(element.user, 110);
        } else {
          target = parseInt(target) + 10;
          let tipperAmount = localStorage.getItem(tipper);
          tipperAmount = tipperAmount - 10;
          localStorage.setItem(element.user, target);
          localStorage.setItem(tipper, tipperAmount);
        }
        generateToken(connectBtn.innerText);
      });

      user.append(button);
      document.getElementById('commentList').append(block);
    });
    // document.getElementById('commentList').innerHTML = str;
  } else {
    list = [];
  }

  document.getElementById(
    'checkCommentButton'
  ).innerText = `Comment List (${list.length})`;
};

const generateToken = (address) => {
  let data = localStorage.getItem(address);
  if (!data) {
    localStorage.setItem(address, 100);
    tokenAmount.innerText = `CHRV: 100`;
  } else {
    tokenAmount.innerText = `CHRV: ${data}`;
  }
};

const updateTokenValue = () => {
  setInterval(() => {
    tokenValue.innerText = `1CHRV = ${(Math.random() / 10 ** 4).toFixed(
      6
    )} Dai`;
  }, 2000);
};

const storeUserCommentHistory = (address, link) => {
  let arr = [];
  let history = localStorage.getItem(`${address}_history`);
  if (!history) {
    arr.push(link);
    localStorage.setItem(`${address}_history`, JSON.stringify(arr));
  } else {
    history = JSON.parse(history);

    if (history.includes(link)) {
      return;
    }
    history.push(link);
    localStorage.setItem(`${address}_history`, JSON.stringify(history));
  }
};

const getUserCommentHistory = () => {
  const address = connectBtn.innerText;
  if (address === 'Connect') {
    alert('Please connect your wallet first');
    return;
  }

  let list = localStorage.getItem(`${address}_history`);
  list = JSON.parse(list);
  let str = '';
  list.forEach((element) => {
    str +=
      '<div style="border-bottom: solid 1px rgba(0,0,0,.5); margin-top: 10px; padding-bottom: 5px">';
    str += `<a target="_blank" src=${element} style="cursor: pointer">`;
    str += element;
    str += `<div> 👍🏻 ${Math.floor(Math.random() * 100)}</div>`;
    str += '</div>';
    str += '</div>';
  });
  document.getElementById('historyModal').innerHTML = str;
  historyContainer.style.display = 'block';
};

// ==================== Events ====================
commentContainerBg.addEventListener('click', closeContainer);
commentListContainerBg.addEventListener('click', closeContainer);
historyContainerBg.addEventListener('click', closeContainer);
connectBtn.addEventListener('click', connect);
commentModalBtn.addEventListener('click', showCommentModal);
checkCommentButton.addEventListener('click', showCommentList);
historyListBtn.addEventListener('click', showHistoryList);
submitButton.addEventListener('click', storeComment);
// ==================== Events ====================

// Init
getList();
updateTokenValue();

export default commentContainer;
