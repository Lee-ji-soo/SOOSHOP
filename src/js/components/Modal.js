function Modal(EMAIL_RULE) {
    const modal = document.querySelector('.modal-box')
    const modalBg = document.querySelector('.modal-bg-box')
    const signBtn = document.querySelectorAll('.nav_sign')
    const closeBtn = document.getElementById('close-btn')
    const modalTT = document.getElementById('modal_title')

    this.evtBinding = () => {

        this.handleOpen = () => {
            let signInUpTxt = ''

            const openModal = (e) => {
                if (e.target.id === 'signup-btn') {
                    signInUpTxt = "가입 하세요"
                } else if (e.target.id === 'signin-btn') {
                    signInUpTxt = "로그인 하세요"
                }

                if (modalTT, modal) {
                    modalTT.innerHTML = signInUpTxt
                    modal.style.display = 'block'
                }
            }

            const closeModal = (e) => {
                if (e.target === modalBg || e.target === closeBtn) {
                    modal.style.display = 'none';
                }
            }

            if (signBtn, modalBg) {
                signBtn.forEach(btn => btn.addEventListener('click', openModal))
                modalBg.addEventListener('click', closeModal)
            }
        }

        this.emailCheck = () => {
            //모달창 email-check JS
            const email = document.getElementById('form-email');
            const password = document.getElementById('form-password');
            const modalSubmit = document.getElementById('input-form');

            const emailRule = EMAIL_RULE

            const isPermitted = (e) => {
                const emailValue = email.value
                const passwordValue = password.value

                if (emailValue == '') {
                    alert('이메일을 입력해 주세요.')
                    e.preventDefault();
                }
                else if (passwordValue == '') {
                    alert('비밀번호를 입력해 주세요.')
                    e.preventDefault();
                }
                else if (emailValue.match(emailRule) === false) {
                    alert('이메일이 형식에 맞지 않습니다.')
                    e.preventDefault();
                }
                else {
                    return true
                }
            }

            if (modalSubmit) {
                modalSubmit.addEventListener('submit', isPermitted)
            }
        }

        this.handleOpen()
        this.emailCheck()
    }

    this.evtBinding();
}

export default Modal
