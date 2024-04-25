// errorHandler.js
export function handleAxiosError(error) {
  if (error.response) {
    const statusCode = error.response.status;
    switch (statusCode) {
      case 400:
        alert("입력 정보를 다시 확인해 주세요.");
        break;
      case 409:
        alert("이미 등록된 이메일이나 사용자 이름입니다.");
        break;
      case 500:
        alert("서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
        break;
      default:
        alert("알 수 없는 오류가 발생했습니다.");
    }
  } else if (error.request) {
    alert("서버로부터 응답을 받지 못했습니다. 네트워크 연결을 확인해 주세요.");
  } else {
    alert("요청 처리 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
  }
}
