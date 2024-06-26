export function handleAxiosError(error) {
  if (error.response) {
    const statusCode = error.response.status;
    switch (statusCode) {
      case 400:
        alert("입력 정보를 다시 확인해 주세요.");
        break;
      case 401:
        alert("인증에 실패했습니다.");
        break;
      case 404:
        alert("요청한 리소스가 서버에서 찾을 수 없습니다.");
        break;
      case 500:
        alert("서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
        break;
      default:
        alert("서버 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
    }
    
  } else if (error.request) {
    alert("서버로부터 응답을 받지 못했습니다. 네트워크 연결을 확인해 주세요.");
  } else {
    alert("요청 처리 중 오류가 발생했습니다. 나중에 다시 시도해 주세요.");
  }
}
