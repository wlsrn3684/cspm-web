export const AWSChecklist = [
  {
    classification: "접근 관리",
    index: "CloudFront_001",
    risk: "상",
    name: "CloudFront 배포에 지리적 제한이 설정되어 있는지 확인하시오.",
    description:
      "특정 국가의 사용자가 콘텐츠에 액세스하지 못하도록해야하는 경우 CloudFront 지리적 제한 기능을 사용하여 해당 국가를 허용 목록에 추가하거나 차단해야합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\r\n2. 설정할 인스턴스를 선택하십시오.\r\n3. "Distribution Settings" 버튼을 누릅니다.\r\n4. "Restrictions" 탭을 선택합니다.\r\n5. 설정된 값이 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\r\n2. 설정할 인스턴스를 선택하십시오.\r\n3. "Distribution Settings" 버튼을 누릅니다.\r\n4. "Restrictions" 탭을 선택합니다.\r\n5. "Edit" 버튼을 누릅니다.\r\n6. 적용 가능한 값을 입력합니다.\r\n7. "Yes, Edit" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/data-protection-summary.html\r\nhttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/georestrictions.html#georestrictions-cloudfront",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "CloudFront_002",
    risk: "상",
    name: "CloudFront 배포에 AWS WAF 웹 ACL이 설정되어 있는지 확인하시오.",
    description:
      "모든 AWS CloudFront 웹 배포가 웹 애플리케이션 방화벽 (AWS WAF) 서비스와 통합되어 웹 애플리케이션의 보안을 손상 시키거나 불필요한 부하를 가할 수있는 애플리케이션 계층 공격으로부터 보호해야 합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\r\n2. 설정할 인스턴스를 선택하십시오.\r\n3. "Distribution Settings" 버튼을 누릅니다.\r\n4. "General" 탭을 선택합니다.\r\n5. "AWS WAF Web ACL"에 값이 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\n2. 설정할 인스턴스를 선택하십시오.\n3. "Distribution Settings" 버튼을 누릅니다.\n4. "General" 탭을 선택합니다.\n5. "Edit" 버튼을 누릅니다.\n6. "AWS WAF Web ACL"에 적용 가능한 값을 입력합니다.\n7. "Yes, Edit" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/data-protection-summary.html\n",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "CloudFront_003",
    risk: "상",
    name: "CloudFront 배포의 S3 오리진에 버킷 액세스 제한이 설정되어 있는지 확인하시오.",
    description:
      "[Origin이 S3일 경우]\n사용자가 CloudFront를 통해 액세스 할 수 있지만 Amazon S3 URL을 사용하여 직접 액세스 할 수 없도록 Amazon S3 버킷의 콘텐츠를 선택적으로 보호 할 수 있습니다. 이렇게하면 CloudFront를 우회하고 Amazon S3 URL을 사용하여 액세스를 제한하려는 콘텐츠를 가져올 수 없습니다. 이 기능은 서명 된 URL을 사용하는 데 필요하지 않지만 권장됩니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\n2. 설정할 인스턴스를 선택하십시오.\n3. "Distribution Settings" 버튼을 누릅니다.\n4. "Behaviors" 탭을 누릅니다.\n5. 설정할 "Behavior"를 선택합니다.\n6. "Edit" 버튼을 누릅니다.\n7. "Restrict Bucket Access" 항목에 "No"로 설정되어 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\r\n2. 설정할 인스턴스를 선택하십시오.\r\n3. "Distribution Settings" 버튼을 누릅니다.\r\n4. "Behaviors" 탭을 누릅니다.\r\n5. 설정할 "Behavior"를 선택합니다.\r\n6. "Edit" 버튼을 누릅니다.\r\n7. "Restrict Bucket Access" 항목에 "Yes"를 선택합니다.\r\n8. "Yes, Edit" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-overview.html#forward-custom-headers-restrict-access\r\nhttps://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudFront_004",
    risk: "상",
    name: 'CloudFront 배포의 S3가 아닌 오리진에 최소 오리진 프로토콜이 "TLSv1.1" 또는 "TLSv1.2" 이상으로 설정되어 있는지 확인하시오.',
    description:
      "[Origin이 ELB일 경우]\n사용자가 TLSv1.1 이상을 지원하지 않는 브라우저 또는 디바이스를 사용하지 않는 한 CloudFront 배포 보안 정책의 최소 프로토콜 버전으로 TLSv1.1을 사용할 것을 권장합니다. Cloudfront 배포가 CloudFront 엣지 로케이션과 사용자 지정 오리진 간의 HTTPS 통신에 안전하지 않은 SSL 프로토콜을 사용하지 않도록 설정해야 합니다. SSLv3 프로토콜은 덜 안전하므로 오리진이 TLSv1 이상을 지원하지 않는 경우에만 SSLv3를 선택하는 것이 좋습니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\n2. 설정할 인스턴스를 선택하십시오.\n3. "Distribution Settings" 버튼을 누릅니다.\n4. "Behaviors" 탭을 누릅니다.\n5. 설정할 "Behavior"를 선택합니다.\n6. "Edit" 버튼을 누릅니다.\n7. "Minimum Origin SSL Protocol" 항목에 "SSLv3" 또는 "TLSv1.0"로 설정되어 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\n2. "Create Distribution" 버튼을 누릅니다.\n3. "Get Started" 버튼을 누릅니다.\n4. 필수 설정 값들을 입력합니다.\n5. "Minimum Origin SSL Protocol" 항목에 "TLSv1.1" 또는 "TLSv1.2"를 선택합니다.\n6. "Create Distribution" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/data-protection-summary.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudFront_005",
    risk: "상",
    name: 'CloudFront 배포의 S3가 아닌 오리진에 오리진 프로토콜 정책이 "HTTPS 만" 또는 "매치 뷰어"로 설정되어 있는지 확인하시오.',
    description:
      "[Origin이 ELB일 경우]\nHTTPS를 사용하여 오리진에서 파일을 가져 오도록 CloudFront를 구성하여 CloudFront가 오리진과 통신 할 때 연결이 암호화되도록 할 수 있습니다. 그러므로 웹 콘텐츠 전송을 보호하고 전송 중 데이터 암호화에 대한 규정 준수 요구 사항을 충족하기 위해 오리진 프로토콜 정책을 HTTPS를 사용하도록 구성해야  합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\n2. 설정할 인스턴스를 선택하십시오.\n3. "Distribution Settings" 버튼을 누릅니다.\n4. "Behaviors" 탭을 누릅니다.\n5. 설정할 "Behavior"를 선택합니다.\n6. "Edit" 버튼을 누릅니다.\n7. "Origin Protocol Policy" 항목에 "HTTPS" 또는 "Match viewer"로 설정되어 있는지 확인합니다..',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\n2. 설정할 인스턴스를 선택하십시오.\n3. "Distribution Settings" 버튼을 누릅니다.\n4. "Behaviors" 탭을 누릅니다.\n5. 설정할 "Behavior"를 선택합니다.\n6. "Edit" 버튼을 누릅니다.\n7. "Origin Protocol Policy" 항목에 "HTTPS Only" 또는 "Match Viewer"를 선택합니다.\n8. "Yes, Edit" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/data-protection-summary.htmll",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudFront_006",
    risk: "상",
    name: 'CloudFront 배포의 Behaviors의 뷰어 프로토콜 정책이 "HTTP를 HTTPS로 리다이렉션" 또는 "HTTPS 만"으로 설정되어 있는지 확인하시오.',
    description:
      "전송 중에 데이터를 암호화하기 위해 CloudFront가 뷰어와 통신 할 때 뷰어가 HTTPS를 사용해야 합니다. 그러므로 뷰어가 HTTP 요청을 HTTPS 요청으로 redirection하거나 HTTPS 프로토콜만을 사용하도록 웹 배포 프로토콜 정책을 구성해야합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\r\n2. 설정할 인스턴스를 선택하십시오.\r\n3. "Distribution Settings" 버튼을 누릅니다.\r\n4. "Behaviors" 탭을 누릅니다.\r\n5. 설정할 "Behavior"를 선택합니다.\r\n6. "Edit" 버튼을 누릅니다.\r\n7. "Viewer Protocol Policy" 항목에 "HTTP"로 설정되어 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\n2. 설정할 인스턴스를 선택하십시오.\n3. "Distribution Settings" 버튼을 누릅니다.\n4. "Behaviors" 탭을 누릅니다.\n5. 설정할 "Behavior"를 선택합니다.\n6. "Edit" 버튼을 누릅니다.\n7. "Viewer Protocol Policy" 항목에 "HTTPS Only" 또는 "Redirect HTTP to HTTPS"를 선택합니다.\n8. "Yes, Edit" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/data-protection-summary.html",
    provider: "AWS",
  },
  {
    classification: "로그 관리",
    index: "CloudFront_007",
    risk: "상",
    name: "CloudFront 배포에 실시간 로그 활성화되어 있는지 확인하시오.",
    description:
      "문제 상황이 발생했을 때 보안 및 액세스 감사에 사용하기 위해 CloudFront 배포에 로깅 기능이 활성화해야 합니다. 서버 액세스 로그는 배포 요청에 대한 자세한 기록을 제공합니다. 서버 액세스 로그는 많은 응용 프로그램에 유용합니다. 예를 들어 액세스 로그 정보는 보안 및 액세스 감사에 유용 할 수 있습니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\r\n2. 설정할 인스턴스를 선택하십시오.\r\n3. "Distribution Settings" 버튼을 누릅니다.\r\n4. "Behaviors" 탭을 누릅니다.\r\n5. 설정할 "Behavior"를 선택합니다.\r\n6. "Edit" 버튼을 누릅니다.\r\n7. "Enable Real-time Logs" 항목에 "No"로 설정되어 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\r\n2. 설정할 인스턴스를 선택하십시오.\r\n3. "Distribution Settings" 버튼을 누릅니다.\r\n4. "Behaviors" 탭을 누릅니다.\r\n5. 설정할 "Behavior"를 선택합니다.\r\n6. "Edit" 버튼을 누릅니다.\r\n7. "Enable Real-time Logs" 항목에 "Yes"를 선택합니다.\r\n8. "Yes, Edit" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/logging-and-monitoring.html",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "CloudFront_008",
    risk: "상",
    name: "CloudFront 웹 배포의 각 Behavior에 필드 수준 암호화를 실행하는지 확인하시오.",
    description:
      "필드 수준 암호화를 사용하면 사용자가 중요한 정보를 웹 서버에 안전하게 업로드 할 수 있습니다. 사용자가 제공하는 민감한 정보는 사용자와 가까운 에지에서 암호화되며 전체 애플리케이션 스택에서 암호화 된 상태로 유지됩니다. 이 암호화는 데이터가 필요하고이를 해독 할 수있는 자격 증명이있는 응용 프로그램 만 그렇게 할 수 있도록합니다. 필드 수준 암호화를 사용하는 HTTPS 요청이 오리진으로 전달되고 요청이 오리진 애플리케이션 또는 하위 시스템을 통해 라우팅 될 때 민감한 데이터는 여전히 암호화되어 데이터 침해 또는 민감한 데이터의 우발적인 데이터 손실 위험을 줄입니다. 신용 번호에 대한 액세스가 필요한 결제 처리 시스템과 같이 비즈니스 이유로 중요한 데이터에 액세스해야하는 구성 요소는 적절한 개인 키를 사용하여 데이터를 해독하고 액세스 할 수 있습니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\n2. 왼쪽 사이드바에 "Security" 안에 "Field-level encryption" 탭을 누릅니다.\n3. "Field-level encryption"가 활성화되어 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudfront/ 에서 CloudFront 콘솔을 엽니다.\n(CloudFront 키가 있다면 아래의 과정을 생략하셔도 됩니다.)\n- "Key management" 안에 "Public keys" 탭을 누릅니다.\n- "Add public key" 버튼을 누릅니다.\n- 양식에 맞춰 값을 입력합니다.\n2. 왼쪽 사이드바에 "Security" 안에 "Field-level encryption" 탭을 누릅니다.\n3. "Create profile" 버튼을 누릅니다.\n4. 양식에 맞춰 값을 다 채우고 "Create profile" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "EBS_001",
    risk: "상",
    name: "EBS 볼륨 스냅샷이 퍼블릭으로 설정되어 있는지 확인하시오.",
    description:
      "EBS 볼륨 스냅샷을 퍼블릭으로 만들면 모든 AWS 계정 및 사용자에게 해당 스냅샷의 모든 데이터에 대한 액세스 권한을 부여하게 됩니다. 이로 인해 개인 및 민감한 데이터의 노출이 발생할 수 있습니다. 그러므로 스냅샷을 프라이빗으로 설정해야 합니다. 스냅샷을 특정 사용자 또는 계정과 공유하고자 하는 경우에는 스냅샷을 프라이빗으로 표시한 다음 스냅샷 데이터를 공유할 사용자 또는 계정을 지정해야 합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 왼쪽의 사이드 바에서 "Elastic Block Store" 탭에서 스냅샷을 누릅니다.\r\n3. 해당 스냅샷을 선택합니다.\r\n4. 하단에 "권한" 섹션을 선택합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽의 사이드 바에서 "Elastic Block Store" 탭에서 스냅샷을 누릅니다.\n3. 해당 스냅샷을 우클릭하고 "권한 수정"을 누릅니다.\n4. 이 스냅샷의 현재 상태를 프라이빗으로 설정합니다.\n5. "저장" 버튼을 누릅니다.',
    reference:
      "https://aws.amazon.com/ko/premiumsupport/technology/trusted-advisor/best-practice-checklist/",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "EBS_002",
    risk: "상",
    name: "연결되지 않은 EBS 볼륨이 존재하는지 확인하시오.",
    description:
      "AWS 계정에서 사용할 수있는 연결되지 않은 (사용되지 않은) Elastic Block Store (EBS) 볼륨을 식별하고이를 제거하여 월별 AWS 청구 비용을 낮추고 기밀 / 민감한 데이터가 사내에서 유출 될 위험을 줄입니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 리소스 섹션에서 볼륨을 선택합니다.\r\n3. 상태가 "in-use"가 아닌 볼륨들이 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 리소스 섹션에서 볼륨을 선택합니다.\r\n3. 상태가 "in-use"가 아닌 볼륨들을 선택합니다.\r\n4. "작업" 버튼을 누르고 "볼륨 삭제를" 누릅니다.\r\n5. "예, 삭제" 버튼을 누릅니다.',
    reference: "",
    provider: "AWS",
  },
  {
    classification: "백업 관리",
    index: "EBS_003",
    risk: "상",
    name: "EBS 볼륨이 최대 7일마다 스냅샷을 생성하도록 설정되어 있는지 확인하시오.",
    description:
      "EBS 볼륨 (사용 가능 또는 사용 중)에 더 빠르고 안정적인 데이터 백업 전략을 위해 특정 시점 복구에 사용할 수있는 최신 스냅 샷 (매주 촬영)이 있는지 확인합니다. 볼륨 스냅 샷 사이의 시간 프레임에 대한 임계 값은 7 일입니다. 즉, 최소한 7 일마다 스냅 샷이 생성되어야합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 리소스 섹션에서 볼륨을 선택합니다.\r\n3. 설정할 인스턴스를 마우스로 선택합니다.\r\n4. 하단에 "태그" 섹션을 선택합니다.\r\n5. 알맞은 설정 값이 있는지 확인합니다.\r\n6. 왼쪽의 사이드바에 "Elastic Block Store"에 "수명 주기 관리자"를 누릅니다.\r\n7. 정책들 중에 앞의 태그와 일치하는 수명 주기 관리 정책이 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 리소스 섹션에서 볼륨을 선택합니다.\r\n3. 설정할 인스턴스를 마우스 우클릭하고 "태그 추가/편집"을 누릅니다.\r\n4. 적용 가능한 값을 입력합니다.\r\n5. "저장" 버튼을 누릅니다.\r\n6. 왼쪽의 사이드바에 "Elastic Block Store"에 "수명 주기 관리자"를 누릅니다.\r\n7. "수명 주기 정책 생성" 버튼을 누릅니다.\r\n8. 앞서 입력한 태그를 입력하고 알맞은 값을 입력하고 "정책 생성" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/snapshot-lifecycle.html\r\nhttps://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/Using_Tags.html",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "EBS_004",
    risk: "상",
    name: "EBS 볼륨의 암호화 설정이 활성화되어 있는지 확인하시오.",
    description:
      "애플리케이션의 추가 작업 없이 민감하고 즁요한 데이터를 보호할 수 있습니다. 또한 암호화 된 EBS 볼륨은 규제 / 감사 데이터 및 애플리케이션에 대한 다양한 미사용 데이터 암호화 요구 사항을 충족 할 수 있습니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 리소스 섹션에서 볼륨을 선택합니다.\r\n3. 암호화가 "암호화됨"이 아닌 볼륨들이 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 리소스 섹션에서 볼륨을 선택합니다.\r\n3. 설정할 인스턴스를 마우스 우클릭하고 "스냅샷 생성"을 누릅니다.\r\n4. 왼쪽의 사이드 바에서 "Elastic Block Store" 탭에서 스냅샷을 누릅니다.\r\n5. 생성한 스냅샷을 우클릭하고 "볼륨 생성"을 누릅니다.\r\n6. 암호화 부분에 이 볼륨 암호화를 체크합니다.\r\n7. "볼륨 생성" 버튼을 누릅니다.\r\n8. 이전의 암호화 되지 않은 EBS 볼륨을 삭제합니다.\r\n- 왼쪽의 사이드 바에서 "Elastic Block Store" 탭에서 볼륨을 누릅니다.\r\n- 해당 볼륨을 우클릭하고 "볼륨 삭제"를 누릅니다.\r\n- "예, 삭제" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes.html#EBSFeatures",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "EBS_005",
    risk: "상",
    name: "EBS 볼륨이 KMS 고객 관리형 키(CMK)로 암호화되었는지 확인하시오.",
    description:
      "리전에서 암호화 된 EBS 볼륨을 처음 생성하면 기본 마스터 키가 자동으로 생성됩니다. 이 키는 AWS KMS를 사용하여 별도로 생성 한 고객 마스터 키 (CMK)를 선택하지 않는 한 Amazon EBS 암호화에 사용됩니다. 자신의 CMK를 생성하면 생성, 회전, 비활성화, 액세스 제어를 정의하고 데이터를 보호하는 데 사용되는 암호화 키를 감사합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 리소스 섹션에서 볼륨을 선택합니다.\n3. 설정할 인스턴스를 마우스로 선택합니다.\n4. 하단에 "설명" 섹션을 선택합니다.\n5. KMS 키 ARN을 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 오른쪽의 계정 속성 섹션에 "EBS 암호화"를 누릅니다.\r\n3. "관리" 버튼을 누릅니다.\r\n4. 기본 암호화 키를 CMK로 교체합니다.\r\n5. "EBS 암호화 업데이트" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes.html#EBSFeatures",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "EBS_006",
    risk: "상",
    name: "EBS 스냅샷이 암호화되었는지 확인하시오.",
    description:
      "EBS 볼륨 스냅샷에는 민감하고 중요한 데이터가 보관되어 있을 수 있습니다. 이러한 스냅샷이 암호화되어 있지 않다면 개인 및 민감한 데이터의 노출이 발생할 수 있습니다. 그러므로 EBS 볼륨 스냅샷이 암호화되어 미사용 데이터 암호화에 대한 규정 준수 요구 사항을 충족하는지 확인해야 합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 왼쪽의 사이드 바에서 "Elastic Block Store" 탭에서 스냅샷을 누릅니다.\r\n3. 해당 스냅샷의 암호화 부분이 "암호화됨"으로 되어 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 왼쪽의 사이드 바에서 "Elastic Block Store" 탭에서 스냅샷을 누릅니다.\r\n3. 해당 스냅샷을 우클릭하고 "볼륨 생성"을 누릅니다.\r\n4. 스냅샷을 생성할 때 암호화를 활성화합니다.\r\n4. 왼쪽의 사이드 바에서 "Elastic Block Store" 탭에서 볼륨을 누릅니다.\r\n5. 해당 스냅샷으로 생성된 볼륨을 우클릭하고 "스냅샷 생성"을 누릅니다.\r\n6. "스냅샷 생성" 버튼을 누릅니다.\r\n7. 해당 볼륨을 우클릭하고 "볼륨 삭제"를 누릅니다.\r\n8. 왼쪽의 사이드 바에서 "Elastic Block Store" 탭에서 스냅샷을 누릅니다.\r\n9. 암호화 되지 않은 스냅샷을 우클릭하고 삭제를 누릅니다.\r\n10. "예, 삭제" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes.html#EBSFeatures",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "EBS_007",
    risk: "상",
    name: 'EBS 볼륨 설정에서 "새 EBS 볼륨을 항상 암호화"가 활성화되어 있는지 확인하시오.',
    description:
      "애플리케이션의 추가 작업 없이 민감하고 즁요한 데이터를 보호할 수 있습니다. 또한 암호화 된 EBS 볼륨은 규제 / 감사 데이터 및 애플리케이션에 대한 다양한 미사용 데이터 암호화 요구 사항을 충족 할 수 있습니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 오른쪽의 계정 속성 섹션에 "EBS 암호화"를 누릅니다.\n3. "새 EBS 볼륨을 항상 암호화"가 활성화되어 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 오른쪽의 계정 속성 섹션에 "EBS 암호화"를 누릅니다.\r\n3. "관리" 버튼을 누릅니다.\r\n4. 새 EBS 볼륨을 항상 암호화를 활성화 합니다.\r\n5. "EBS 암호화 업데이트" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes.html#EBSFeatures",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudTrail_001",
    risk: "상",
    name: "AWS 계정에 활성화되어 있는 CloudTrail의 Trail이 존재하는지 확인하시오.",
    description:
      "AWS 계정에 대해서 AWS Management Console, AWS CLI, AWS SDK, API 등에서 수행하는 모든 작업들은 CloudTrail에 이벤트로써 기록됩니다.\n\nCloudTrail에 Trail을 생성하지 않아도 90일간의 관리 이벤트 기록이 보관되지만, 이 기록은 영구적이지 않은 뿐만 아니라 모든 이벤트 유형을 기록하지 않습니다.\n\nAWS 계정활동에 대해서 CloudTrail을 통한 가시성 확보는 보안 및 운영에서 매우 중요합니다. 보안 및 관리 목적으로 AWS 계정에서 API활동에 대한 가시성을 높이기 위한 CloudTrail이 활성화되어 있는지 확인해야 합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에 상태가 '로깅'인 추적이 존재하는지 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에 상태가 '끄기'인 추적이 있다면 해당 추적의 이름을 선택합니다.\n3. '로깅 시작' 버튼을 눌러 해당 추적을 활성화합니다.\n4. 2번에서 추적이 없다면 '추적 생성' 버튼을 누릅니다.\n5. 세부사항을 설정 후 '다음' 버튼을 눌러 추적을 생성합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudtrail-user-guide.html \nhttps://www.cloudconformity.com/knowledge-base/aws/CloudTrail/cloudtrail-enabled.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudTrail_002",
    risk: "상",
    name: "CloudTrail의 Trail이 모든 영역에서 이벤트를 로깅하도록 설정했는지 확인하시오.",
    description:
      '하나의 AWS 계정에서 여러 개의 리전을 통해 서비스를 운용할 수 있습니다. AWS 계정의 모든 사용자, 역할, 서비스가 수행하는 이벤트 기록을 획득하려면 각 리전에서 발생하는 이벤트 기록을 모두 획득해야 합니다.\n\n따라서, AWS 계정의 모든 리전에서 이벤트 기록을 획득하도록 각 Trail을 구성해야 합니다.\n\nTrail을 모든 리전에서 이벤트 기록을 획득하도록 구성하면, AWS 계정의 모든 리전에서 수행한 이벤트 기록들을 하나의 AWS S3 Bucket이나 CloudWatch Logs 로그 그룹에서 수신할 수 있습니다. 또한 선택적으로 SNS Topic을 지정한 경우 CloudTrail에서는 여러 리전에서 발생한 이벤트 기록을 하나의 SNS Topic에 전달하고, 이를 통해 SNS 알림을 전송할 수 있습니다.\n\n그리고 새로운 리전을 추가하게 되면, 기존의 Trail 구성을 복사해 추가적인 작업 없이 새로운 리전에 대한 이벤트 기록이 포함된 로그 파일을 수신하게 됩니다.\n\nCloudTrail에서 Trail을 생성하거나 업데이트하면서 새로운 Amazon S3 Bucket을 생성할 경우 CloudTrail은 필요한 권한을 해당 Amazon S3 Bucket에 연결합니다. 이 때 Bucket 정책에서 사용하는 서비스 보안 주체 이름을 "cloudtrail.amazonaws.com"으로 사용해야 합니다.\n\n이는 AWS 계정의 모든 리전 뿐만 아니라 새로운 리전에서의 로그 파일을 이 Amazon S3 Bucket으로 전송할 수 있는 CloudTrail 권한을 부여합니다.',
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 일반 세부 정보의 다중 리전 추적이 '예'인지 확인합니다.\n4. 모든 추적에 대해서 반복합니다.",
    action: "콘솔로 설정 불가능",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf \nhttps://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/best-practices-security.html \nhttps://aws.amazon.com/ko/cloudtrail/faqs/",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudTrail_003",
    risk: "상",
    name: "CloudTrail의 각 Trail이 CloudWatch Logs와 통합되어 있는지 확인하시오.",
    description:
      "CloudTrail의 Trail을 CloudWatch Logs와 통합하면 해당 Trail에서 기록한 관리 이벤트 기록과 데이터 이벤트 기록을 사용자가 지정한 CloudWatch Logs 로그 그룹의 로그 스트림으로 전달할 수 있습니다.\n\n이렇게 Trail과 CloudWatch Logs를 통합하면, AWS 계정 활동에 대해 SNS 알림을 받을 수 있습니다. 예를 들어, 보안 그룹과 네트워크 ACL의 생성 및 수정, 삭제 등의 API 호출을 모니터링하도록 알림을 생성할 수 있습니다.\n\n지정된 Amazon S3 Bucket내에 기록한 로그 파일을 저장할 뿐만 아니라 해당 로그 파일을 CloudWatch Logs로 전송하도록 구성해 실시간 분석을 수행할 수 있습니다. 이를 통해 AWS 계정의 모든 활동을 기록, 모니터링 뿐만 아니라 실시간으로 분석하고 적절하게 알림을 보낼 수 있기 때문에 CloudTrail의 각 Trail을 CloudWatch Logs와 통합하도록 구성해야 합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. CloudWatch Logs에 로그 그룹과 IAM 역할이 존재하는지 확인합니다.\n4. 모든 추적에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. CloudWatch Logs의 '편집' 버튼을 선택합니다.\n4. '활성화됨' 체크박스를 체크합니다.\n5. 로그 그룹과 IAM 역할을 선택합니다.\n6. '변경 내용 저장' 버튼을 선택합니다.\n7. 모든 추적에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/best-practices-security.html \nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf \nhttps://aws.amazon.com/ko/cloudtrail/faqs/\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudTrail/cloudtrail-integrated-with-cloudwatch.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudTrail_004",
    risk: "상",
    name: "CloudTrail 로그 파일이 S3 Bucket으로 전송될 때 Amazon SNS Topic을 통한 알림을 설정했는지 확인하시오.",
    description:
      "CloudTrail이 Amazon S3 Bucket에 새로운 로그 파일을 게시할 때 이에 대한 알림 Amazon Simple Notification Service(SNS)를 통해 받을 수 있습니다. ",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 일반 세부 정보의 SNS 알림 전송의 값이 SNS Topic의 arn인지 확인합니다.\n4. 모든 추적에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 일반 세부 정보의 '편집'을 선택합니다.\n4. SNS 알림 전송의 '활성화됨' 체크박스를 체크합니다.\n5. 새 SNS 주제 생성에 SNS 주제를 선택합니다.\n6. '변경 내용 저장' 버튼을 누릅니다.\n7. 모든 추적에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/configure-sns-notifications-for-cloudtrail.html ",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudTrail_005",
    risk: "상",
    name: "CloudTrail의 각 Trail의 Insights Event가 활성화 되어있는지 확인하시오.",
    description:
      "CloudTrail Insights 이벤트는 AWS 계정의 리전의 CloudTrail 쓰기 관리 이벤트를 분석하여 비정상적인 활동을 감지합니다. 평소와 다르거나 비정상적인 이벤트는 이전에 설정된 운영 패턴 및 기준에서 예상하는 것과 다른 AWS API 호출 볼륨으로 정의됩니다. Insights 이벤트는 비정상적인 활동을 파악하고 이에 대한 조치를 취하는데 도움이 되는 관련된 여러 정보를 제공합니다.\n\nCloudTrail Insights 이벤트를 통해 AWS 계정의 이러한 변화를 알 수 있고, 신속하게 시정 조치를 취할 수 있기 때문에 CloudTrail Insights 이벤트를 활성화 해야합니다.\n\nCloudTrail에서 Trail을 생성할 대 기본적으로 Insights 이벤트는 비활성화됩니다. Insights 이벤트를 기록하려면 새로운 Trail 혹은 기존 Trail에서 Insights 이벤트를 명시적으로 활성화해야합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. Insights 이벤트의 이상 탐지가 '활성화됨'인지 확인합니다.\n4. 모든 추적에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. Insights 이벤트의 '편집' 버튼을 선택합니다.\n4. 'Insights 이벤트' 체크박스를 체크합니다.\n5. '변경 내용 저장' 버튼을 선택합니다.\n6. 모든 추적에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-insights-events\nhttps://aws.amazon.com/ko/cloudtrail/faqs/",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudTrail_006",
    risk: "상",
    name: "CloudTrail의 각 Trail이 S3 Bucket와 SNS에 정상적으로 로그를 전달했는지 확인하시오.",
    description:
      "보안 및 규정 준수 감사를 위해 CloudTrail의 로그 파일 데이터를 유지하기 위해서는 Trail에서 생성된 로그 파일이 지정된 수신자에게 오류 없이 전달되는지 확인해야 합니다.\n\nCloudTrail의 Trail이 전송 오류 또는 잘못된 구성(일반적으로 사용자가 설정한 정책) 으로 인해 수신자에게 로그 파일을 전송할 수 없는 경우 이러한 Trail에 의해 기록된 로그 파일들은 향후 보안 및 규정 준수 감사를 위해 사용될 수 없습니다.\n\n로그 파일은 일반적으로 5분마다 게시됩니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 일반 세부 정보의 전송된 마지막 로그 파일의 날짜가 갱신되어 있는지 확인합니다. (일반적으로 로그 파일은 5분마다 게시됩니다.)\n4. 일반 세부 정보의 마지막 SNS 알림의 날짜가 갱신되어 있는지 확인합니다. (일반적으로 로그 파일은 5분마다 게시됩니다.)\n5. 마지막 SNS 알림의 앞에 경고 기호가 표시되어 있는지 확인합니다.\n6. 모든 추적에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 일반 세부 정보의 '편집' 버튼을 선택합니다.\n4. 스토리지 위치의 '새 S3 버킷 생성' 라디오 버튼을 선택합니다.\n5. SNS 알림 전송의 '활성화됨' 체크박스를 체크합니다.\n6. '신규' 라디오 버튼을 선택합니다.\n7. '변경 내용 저장' 버튼을 선택합니다.\n8. 모든 추적에 대해서 반복합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/CloudTrail/delivery-failing.html",
    provider: "AWS",
  },
  {
    classification: "로그 관리",
    index: "CloudTrail_007",
    risk: "상",
    name: "CloudTrail 로그를 저장하기 위한 S3 Bucket의 액세스 로깅을 하도록 데이터 이벤트를 설정했는지 확인하시오.",
    description:
      "데이터 이벤트는 리소스 상에서 혹은 리소스 내에서 수행되는 작업에 대한 정보를 말합니다. 예를 들면, Amazon S3 객체 수준의 API 활동(GetObject, DeleteObject, PutObject 등), AWS Lambda 함수 실행 활동(Invoke 등)이 있습니다.\n\n데이터 이벤트의 유형에는 Amazon S3 데이터 이벤트, AWS Lambda 데이터 이벤트가 있습니다.\n\nCloudTrail에 새로운 Trail을 생성할 때 기본적으로 데이터 이벤트를 기록하도록 설정하지 않습니다. 따라서 리소스와 리소스 유형을 명시적으로 추가해 데이터 이벤트를 기록하도록 설정해야 합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 데이터 이벤트의 활성화된 목록이 존재하는지 확인합니다.\n4. 모든 추적에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 데이터 이벤트의 '편집' 버튼을 선택합니다.\n4. '데이터 이벤트' 체크박스를 체크합니다.\n5. 데이터 이벤트 소스와 세부내용을 선택합니다.\n6. '변경 내용 저장' 버튼을 선택합니다.\n7. 모든 추적에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/logging-data-events-with-cloudtrail.html\nhttps://aws.amazon.com/ko/cloudtrail/faqs/ \nhttps://www.cloudconformity.com/knowledge-base/aws/CloudTrail/data-events.html",
    provider: "AWS",
  },
  {
    classification: "로그 관리",
    index: "CloudTrail_008",
    risk: "상",
    name: "CloudTrail의 각 Trail이 중요한 작업을 기록하기 위한 관리 이벤트를 기록하도록 설정했는지 확인하시오.",
    description:
      "EC2 RunInstances, DescribeInstances, TerminateInstances 및 Console Login (기본적으로 데이터 이벤트가 아닌 모든 이벤트)과 같은 중요한 작업을 기록하기 위해 모든 CloudTrail의 Trail이 관리 이벤트를 기록하도록 구성되어 있는지 확인해야 합니다.\n\n관리 이벤트는 AWS 리소스로 작업 할 때 발생하는 작업이며이를 기록하는 것은 좋은 보안 관행입니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 관리 이벤트의 API 활동이 '모두'이고 AWS KMS 이벤트 제외가 '아니오'인지 확인합니다.\n4. 모든 추적에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 관리 이벤트의 '편집' 버튼을 선택합니다.\n4. '관리 이벤트' 체크박스를 체크합니다.\n5. '변경 내용 저장' 버튼을 선택합니다.\n6. 모든 추적에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudtrail-concepts.html#cloudtrail-concepts-management-events\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudTrail/management-events.html",
    provider: "AWS",
  },
  {
    classification: "로그 관리",
    index: "CloudTrail_009",
    risk: "상",
    name: "CloudTrail의 각 Trail이 로그파일 무결성 검증을 하도록 설정했는지 확인하시오.",
    description:
      "Trail의 로그 파일 무결성 검증 기능을 활성화화면, CloudTrail에서 시간 단위로 다이제스트 파일을 전송합니다. 다이제스트 파일에는 Amazon S3 Bucket에 전송된 로그 파일, 해당 로그 파일에 대한 해시 값, 이전 다이제스트 파일의 디지털 서명, 그리고 Amazon S3 메타데이터 섹션에 있는 현재 다이제스트 파일의 디지털 서명에 관한 정보가 포함됩니다. 이 파일을 통해서 CloudTrail의 로그 파일이 전송 이후 변경, 삭제되었는지 여부를 확인할 수 있습니다.\n\n무결성이 검증된 로그 파일은 보안 및 과학 수사과 같은 IT 보안 및 감사 프로세스를 지원하는데 있어서 특히 중요합니다.\n\n예를 들어, 검증된 로그 파일을 사용하면 Amazon S3 Bucket에 저장되어 있는 로그 파일이 변경되지 않았음을 보장하고, 이는 특정 사용자의 자격증명이 특정 API 활동을 수행했음을 확실하게 주장함으로써 부인방지의 역할을 수행합니다. 또한, CloudTrail 로그 파일 무결성 검증 과정을 통해 로그 파일이 삭제, 변경되었는지 여부를 파악하고, 지정된 기간동안 Amazon S3 Bucket 혹은 CloudWatch Logs 로그 그룹에 로그 파일이 전송되지 않았음을 확실하게 주장할 수 있습니다.\n\n따라서, CloudTrail의 각 Trail에 로그 파일 무결성 검증을 설정해야 합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 일반 세부 정보의 '로그 파일 검증' 의 값이 '활성화됨'인지 확인합니다.\n4. 모든 추적에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 일반 세부 정보의 '편집' 버튼을 누릅니다.\n4. '로그 파일 검증' 의 '활성화됨' 체크박스를 체크합니다.\n5. '변경 내용 저장' 버튼을 누릅니다.\n6. 모든 추적에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/best-practices-security.html#best-practices-security-detective \nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://aws.amazon.com/ko/cloudtrail/faqs/\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudTrail/cloudtrail-log-file-integrity-validation.html",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "CloudTrail_010",
    risk: "상",
    name: "CloudTrail 로그가 KMS CMKs를 통해 암호화되도록 설정했는지 확인하시오.",
    description:
      "CloudTrail의 Trail이 Amazon S3 Bucket에 제공하는 로그 파일은 기본적으로 Amazon S3 관리형 암호화 키(SSE-S3)를 사용하는 서버측 암호화를 통해 암호화됩니다. 직접 관리할 수 있는 보안 계층을 추가하기 위해 CloudTrail의 Trail의 로그 파일에 대한 AWS KMS 관리형 키(SSE-KMS)로 서버측 암호화를 대신할 수 있습니다.\n\n로그 파일을 조금 더 안전하게 보호하기 위해서 CloudTrail로 SSE-KMS를 사용하려면 고객 마스터 키(CMK)로 알려진 KMS를 생성하고 관리해야 합니다.\n\n이와 같은 방법으로 암호화를 수행할 경우 아래의 장점이 있습니다.\n1. CMK 암호화 키를 직접 생성하고 관리할 수 있습니다.\n2. AWS 계정의 모든 리전에서 로그 파일을 암호화하고 복호화할 단일 CMK를 사용할 수 있습니다.\n3. Trail의 로그 파일을 암호화하고 복호화하는 키를 사용할 사람을 제어할 수 있습니다.\n4. 더 강화된 보안을 적용할 수 있습니다.\n5. Amazon S3가 CMK를 사용할 권한이 부여된 사용자로부터 요청에 따라서 로그 파일을 자동으로 복호화 하기 때문에 Trail의 로그 파일에 대한 SSE-KMS 암호화는 로그 데이터를 읽는 어플리케이션과도 호환됩니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 일반 세부 정보의 로그 파일 SSE-KMS 암호화에 arn이 존재하는지 확인합니다.\n4. https://console.aws.amazon.com/kms/ 에서 Key Management Service(KMS) 콘솔을 엽니다.\n5. 왼쪽 메뉴에서 '고객 관리형 키'를 선택합니다.\n6. 필터링에 3번에서 확인한 arn을 입력합니다.\n7. 결과로 나온 KMS 목록의 상태가 '활성화됨' 인지 확인합니다.\n8. 모든 추적에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/cloudtrail/ 에서 CloudTrail 콘솔을 엽니다.\n2. 추적 목록에서 추적의 이름을 선택합니다.\n3. 일반 세부 정보의 '편집' 버튼을 선택합니다.\n4. 로그 파일 SSE-KMS 암호화의 '활성화됨' 체크박스를 체크합니다.\n5. AWS KMS 고객 관리형 CMK를 선택합니다.\n6. '변경 내용 저장' 버튼을 선택합니다.\n7.  https://console.aws.amazon.com/kms/ 에서 Key Management Service(KMS) 콘솔을 엽니다.\n8. 왼쪽 메뉴에서 '고객 관리형 키'를 선택합니다.\n9. 필터링에 선택한 고객 관리형 CMK의 이름을 입력합니다.\n10. 결과로 나온 KMS 목록의 '키 ID'를 선택합니다.\n11. '키 작업' 버튼을 선택하고, '활성화' 버튼을 선택합니다.\n12. 모든 추적에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/encrypting-cloudtrail-log-files-with-aws-kms.html \nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf \nhttps://aws.amazon.com/ko/cloudtrail/faqs/\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudTrail/cloudtrail-logs-encrypted.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "VPC_001",
    risk: "상",
    name: "기본 보안그룹에 트래픽을 허용하는 규칙이 존재하는지 확인하시오.",
    description:
      "VPC는 자동으로 기본 보안그룹을 제공한다. 보안그룹은 인바운드 및 아웃바운드 허용 규칙으로 이루어져 있습니다.\n\n기본 보안그룹은 기본적으로 모든 아웃바운드 트래픽을 허용하는 규칙을 포함하고 있습니다. 인스턴스를 시작할 때 임의의 보안그룹을 지정하지 않을 경우 기본 보안그룹이 인스턴스에 자동으로 연결됩니다.\n모든 아웃바운드 트래픽을 허용하는 규칙을 가지는 보안그룹을 인스턴스에 연결하는 것은 위험하기 때문에 기본 보안그룹을 사용하지 않는 것이 좋습니다.\n\n추가로 기본 보안그룹은 삭제할 수 없지만 기본 보안그룹에 존재하는 규칙은 삭제할 수 있습니다. 따라서, 기본 보안그룹의 모든 규칙을 제거해 기본 보안그룹이 자동으로 연결되더라도 모든 아웃바운드 트래픽이 허용되지 않도록 하는 것이 좋습니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 \'보안그룹\'을 선택합니다.\n3. 보안그룹 이름이 "default"인 보안그룹 ID를 선택합니다.\n4. 인바운드 규칙 탭을 선택합니다.\n5. 인바운드 트래픽을 허용하는 규칙이 존재하는지 확인합니다.\n6. 아웃바운드 규칙 탭을 선택합니다.\n7. 아웃바운드 트래픽을 허용하는 규칙이 존재하는지 확인합니다.\n8. 보안그룹 이름이 "default"인 모든 보안그룹에 대해서 반복합니다.',
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안그룹'을 선택합니다.\n3. 보안그룹 이름이 \"default\"인 보안그룹 ID를 선택합니다.\n4. 인바운드 규칙의 '인바운드 규칙 편집' 버튼을 선택합니다.\n5. 모든 규칙에 대해서 '삭제' 버튼을 선택합니다.\n6. '규칙 저장' 버튼을 선택합니다.\n7. 아웃바운드 규칙의 '아웃바운드 규칙 편집' 버튼을 선택합니다.\n8. 모든 규칙에 대해서 '삭제' 버튼을 선택합니다.\n9. '규칙 저장' 버튼을 선택합니다.\n10. 보안그룹 이름이 \"default\"인 모든 보안그룹에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/VPC_SecurityGroups.html#DefaultSecurityGroup\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "VPC_002",
    risk: "상",
    name: "모든 포트에 대한 트래픽을 허용하는 인바운드 혹은 아웃바운드 규칙을 포함하는 보안그룹이 존재하는지 확인하시오.",
    description:
      "애플리케이션에서 필요한 포트만 열어 인스턴스의 인바운드, 아웃바운드 트래픽을 규제함으로써 VPC에 보안 계층이 추가되고, DoS(서비스 거부)공격 혹은 DDoS(분산 서비스 거부)공격과 같은 악의적인 활동으로부터 보호할수 있습니다.\n\n따라서, 보안그룹의 규칙 중 필요하지 않은 포트의 트래픽을 허용해 인스턴스가 보안상 공격에 노출되도록 하는 규칙이 존재하는지 확인해야 합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 \'보안그룹\'을 선택합니다.\n3. 보안그룹 목록의 보안그룹 ID를 선택합니다.\n4. 인바운드 규칙 탭을 선택합니다.\n5. 포트 범위가 "전체" 혹은 "0 - 65535"인 규칙이 존재하는지 확인합니다.\n6. 아웃바운드 규칙 탭을 선택합니다.\n7. 포트 범위가 "전체" 혹은 "0 - 65535""인 규칙이 존재하는지 확인합니다.\n8. 모든 보안그룹 목록에 대해서 반복합니다.',
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안그룹'을 선택합니다.\n3. 보안그룹 목록의 보안그룹 ID를 선택합니다.\n4. 인바운드 규칙의 '인바운드 규칙 편집' 버튼을 선택합니다.\n5. 포트 범위가 \"전체\" 혹은 \"0 - 65535\"인 규칙 우측의 '삭제' 버튼을 선택합니다.\n6. '변경 사항 저장' 버튼을 선택합니다.\n7. 아웃바운드 규칙의 '아웃바운드 규칙 편집' 버튼을 선택합니다.\n8. 포트 범위가 \"전체\" 혹은 \"0 - 65535\"인 규칙 우측의 '삭제' 버튼을 선택합니다.\n9. '변경 사항 저장' 버튼을 선택합니다\n10. 모든 보안그룹 목록에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/ec3-security-groups.html\nhttps://www.cloudconformity.com/knowledge-base/aws/EC2/security-group-port-range.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "VPC_003",
    risk: "상",
    name: "보안그룹에 0.0.0.0/0 혹은 ::/0 에서 불필요한 포트로 액세스하는 것을 허용하는 인바운드 규칙이 존재하는지 확인하시오.",
    description:
      "보안그룹에 있는 인바운드 규칙중 대상이 0.0.0.0/0 혹은 ::/0 인 규칙은 모든 대상의 트래픽을 허용하는 규칙입니다. \n\n포트중에서 보안 사고가 발생할 가능성이 존재하거나 외부에 공개하지 않는 알려진 서비스를 위한 포트에 대한 인바운드 액세스는 허용하지 않는 것이 좋습니다. 필요한 경우 대상을 0.0.0.0/0으로 설정하는 것이 아니라 특정 대상을 지정해 인바운드 규칙을 생성해야 합니다.\n\n보안사고가 발생할 가능성이 존재하거나 보안성 문제가 존재하는 포트의 목록은 아래와 같습니다.\n20, 21 (TCP) - FTP\n22 (TCP) - SSH\n23 (TCP) - Telnet\n25 (TCP) - SMTP\n53 (TCP, UDP) - DNS\n80 (TCP) - HTTP\n135 (TCP) - RPC\n139 (TCP), 137, 138 (UDP) - NetBIOS\n443 (TCP) - HTTPS\n445 (TCP) - CIFS\n1433 (TCP) - MSSQL\n1521 (TCP) - Oracle DB\n3306 (TCP) - MySQL\n3389 (TCP) - RDP\n5432 (TCP) - PostgreSQL DB\n6379 (TCP, UDP) - Redis\n9200 (TCP) - Elasticsearch\n11211 (TCP, UDP) - Memcached 서비스를 악용한 대규모 분산 서비스 거부 공격이 발생할 가능성이 있습니다. (CVE-2018-1000115)\n27017 (TCP) - MongoDB",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 \'보안그룹\'을 선택합니다.\n3. 보안그룹 목록의 보안그룹 ID를 선택합니다.\n4. 인바운드 규칙 탭을 선택합니다.\n5. 포트 범위가 "전체" 혹은 [점검할 포트]이고, 소스가 "0.0.0.0/0" 혹은 "::/0"인 규칙이 존재하는지 확인합니다.\n6. 모든 점검할 포트에 대해서 반복합니다.\n7. 모든 보안그룹 목록에 대해서 반복합니다.',
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안그룹'을 선택합니다.\n3. 보안그룹 목록의 보안그룹 ID를 선택합니다.\n4. 인바운드 규칙의 '인바운드 규칙 편집' 버튼을 선택합니다.\n5. 포트 범위가 \"전체\" 혹은 [점검할 포트]이고, 소스가 \"0.0.0.0/0\" 혹은 \"::/0\"인 규칙 우측의 '삭제' 버튼을 선택합니다.\n6. '변경 사항 저장' 버튼을 선택합니다.\n7. 모든 보안그룹 목록에 대해서 반복합니다.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "VPC_004",
    risk: "상",
    name: "보안그룹에 0.0.0.0/0 혹은 ::/0 에서 ICMP, ICMPv6 액세스하는 것을 허용하는 인바운드 규칙이 존재하는지 확인하시오.",
    description:
      "ICMP(Internet Control Message Protocol)은 일반적으로 IP 패킷 전송 문제에 대한 오류 메시지를 생성해 TCP/IP 네트워크상에서의 문제를 해결하는데 사용되는 오류보고 프로토콜입니다.\n\n보안그룹에서 인바운드 규칙의 대상이 0.0.0.0/0 혹은 ::/0 인 규칙은 모든 대상으로부터의 트래픽을 허용한다는 의미입니다. 모든 대상으로부터의 ICMP 액세스를 허용하면 DoS(서비스 거부)공격, Smurf 공격, Fraggle 공격과 같은 악의적인 공격에 노출될 수 있습니다.\n\nICMP 액세스를 사용해야 한다면 모든 대상에 대해서 허용하는 것이 아니라 특정 대상을 지정해 인바운드 규칙을 생성해야 합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안그룹'을 선택합니다.\n3. 보안그룹 목록의 보안그룹 ID를 선택합니다.\n4. 인바운드 규칙 탭을 선택합니다.\n5. 유형이 '모든 ICMP IPv4' 이고 소스가 '0.0.0.0/0'인 규칙이 존재하는지 확인합니다.\n6. 유형이 '모든 ICMP IPv6' 이고 소스가 '::/0'인 규칙이 존재하는지 확인합니다.\n7. 모든 보안그룹에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안그룹'을 선택합니다.\n3. 보안그룹 목록의 보안그룹 ID를 선택합니다.\n4. 인바운드 규칙의 '인바운드 규칙 편집' 버튼을 선택합니다.\n5. 유형이 '모든 ICMP IPv4' 이고 소스가 '0.0.0.0/0'인 규칙의 '삭제' 버튼을 선택하거나 소스를 특정 IP 주소로 변경합니다.\n6. 유형이 '모든 ICMP IPv6' 이고 소스가 '::/0'인 규칙의 '삭제' 버튼을 선택하거나 소스를 특정 IP 주소로 변경합니다.\n7. '규칙 저장' 버튼을 선택합니다.\n8. 모든 보안그룹에 대해서 반복합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/EC2/unrestricted-icmp-access.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "VPC_005",
    risk: "상",
    name: "보안그룹에 0.0.0.0/0 혹은 ::/0 에 액세스하는 것을 허용하는 아웃바운드 규칙이 존재하는지 확인하시오.",
    description:
      "보안그룹에서 아웃바운드 규칙의 대상이 0.0.0.0/0 혹은 ::/0 인 규칙은 모든 대상으로 전송하는 트래픽을 허용한다는 의미입니다. 모든 대상으로 전송하는 트래픽을 허용하게 되면 DoS(서비스 거부)공격과 같은 악의적인 공격에 노출될 수 있습니다.\n\n따라서 보안그룹에서 모든 대상으로 전송하는 트래픽을 허용하는 아웃바운드 규칙을 필요한 대상 IP주소로만 전송할 수 있도록 제한해야 합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안그룹'을 선택합니다.\n3. 보안그룹 목록의 보안그룹 ID를 선택합니다.\n4. 아웃바운드 규칙 탭을 선택합니다.\n5. 소스가 '0.0.0.0/0'인 규칙이 존재하는지 확인합니다.\n6. 소스가 '::/0'인 규칙이 존재하는지 확인합니다.\n7. 모든 보안그룹에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안그룹'을 선택합니다.\n3. 보안그룹 목록의 보안그룹 ID를 선택합니다.\n4. 아웃바운드 규칙의 '아웃바운드 규칙 편집' 버튼을 선택합니다.\n5. 소스가 '0.0.0.0/0'인 규칙의 '삭제' 버튼을 선택하거나 소스를 특정 IP 주소로 변경합니다.\n6. 소스가 '::/0'인 규칙의 '삭제' 버튼을 선택하거나 소스를 특정 IP 주소로 변경합니다.\n7. '규칙 저장' 버튼을 선택합니다.\n8. 모든 보안그룹에 대해서 반복합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/EC2/security-group-egress-any.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "VPC_006",
    risk: "상",
    name: "보안그룹에 RFC-1918에 지정된 사설 네트워크망 IP 주소 범위(10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16)에서 액세스하는 것을 허용하는 인바운드 규칙이 존재하는지 확인하시오.",
    description:
      "RFC-1918에서 지정한 IP 주소 범위란 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 처럼 내부 호스트에 할당된 Private IP 주소를 말합니다. 이러한 IP 주소는 인터넷에서 사용할 수없거나 연결할 수 없는 사설 네트워크에서 사용해야 합니다.\n\n보안그룹의 인바운드 규칙에서 RFC-1918에서 지정한 IP 주소 범위를 사용해 사설 네트워크 전체가 액세스할 수 있도록 허용하는 것은 지나치게 허용적인 구성입니다.\n\nAWS 보안 모범 사례중에서 최소 권한의 원칙을 따르기 위해서 필요한 사설 네트워크 IP 주소에 대해서만 인바운드 트래픽을 허용하는 것이 좋습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안그룹'을 선택합니다.\n3. 보안그룹 목록의 보안그룹 ID를 선택합니다.\n4. 인바운드 규칙 탭을 선택합니다.\n5. 소스가 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 으로 RFC-1918에서 지정한 사설 네트워크 IP 주소 범위인 규칙이 존재하는지 확인합니다.\n6. 모든 보안그룹에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안그룹'을 선택합니다.\n3. 보안그룹 목록의 보안그룹 ID를 선택합니다.\n4. 인바운드 규칙의 '인바운드 규칙 편집' 버튼을 선택합니다.\n5. 소스가 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 으로 RFC-1918에서 지정한 사설 네트워크 IP 주소 범위인 규칙의 소스를 특정 IP 주소로 변경합니다.\n6. '규칙 저장' 버튼을 선택합니다.\n7. 모든 보안그룹에 대해서 반복합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/EC2/security-group-rfc1918.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "VPC_007",
    risk: "상",
    name: "기본 Network ACL에 트래픽을 허용하는 규칙이 존재하는지 확인하시오.",
    description:
      "VPC는 수정 가능한 기본 NACL(Network ACL)을 제공한다. NACL은 인바운드 및 아웃바운드 허용, 거부 규칙으로 이루어져 있습니다.\n\n기본 NACL은 기본적으로 모든 인바운드 및 아웃바운드 IPv4 트래픽을 허용하는 규칙을 포함하고 있고, 해당되는 경우 IPv6 트래픽도 허용하는 규칙을 포함합니다. Subnet을 생성할 때 사용자 지정 NACL을 선택하지 않을 경우, 기본 NACL이 자동으로 연결됩니다.\n\n모든 인바운드, 아웃바운드 트래픽을 허용하는 규칙을 가지는 NACL을 Subnet에 연결하는 것은 위험하기 때문에 기본 NACL을 사용하지 않는 것이 좋습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '네트워크 ACL'를 선택합니다.\n3. 기본값이 \"예\"인 네트워크 ACL ID를 선택합니다.\n4. 인바운드 규칙 탭을 선택합니다.\n5. 인바운드 규칙중 허용/거부 항목이 'Allow'인 규칙이 존재하는지 확인합니다.\n6. 아웃바운드 규칙 탭을 선택합니다.\n7. 아웃바운드 규칙중 허용/거부 항목이 'Allow'인 규칙이 존재하는지 확인합니다.\n8. 기본값이 \"예\"인 모든 네트워크 ACL에 대해서 반복합니다,",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '네트워크 ACL'를 선택합니다.\n3. 기본값이 \"예\"인 네트워크 ACL ID를 선택합니다.\n4. 인바운드 규칙의 '인바운드 규칙 편집' 버튼을 선택합니다.\n5. 모든 규칙에 대해서 '제거' 버튼을 선택합니다.\n6. '변경 사항 저장' 버튼을 선택합니다.\n7. 아웃바운드 규칙의 '아웃바운드 규칙 편집' 버튼을 선택합니다.\n8. 모든 규칙에 대해서 '제거' 버튼을 선택합니다.\n9. '변경 사항 저장' 버튼을 선택합니다.\n10. 기본값이 \"예\"인 모든 네트워크 ACL에 대해서 반복합니다,",
    reference:
      "https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/vpc-network-acls.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "VPC_008",
    risk: "상",
    name: "모든 포트에 대한 트래픽을 허용하는 인바운드 혹은 아웃바운드 규칙을 포함하는 Network ACL이 존재하는지 확인하시오.",
    description:
      "애플리케이션에서 필요한 포트만 열어 Subnet의 인바운드, 아웃바운드 트래픽을 규제함으로써 VPC에 보안 계층이 추가되고, DoS(서비스 거부)공격 혹은 Ddos(분산 서비스 거부)공격과 같은 악의적인 활동으로부터 보호할수 있습니다.\n\n따라서, NACL의 규칙 중 필요하지 않은 포트의 트래픽을 허용해 Subnet에 포함된 인스턴스들이 보안상 공격에 노출되도록 하는 규칙이 존재하는지 확인해야 합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 \'네트워크 ACL\'을 선택합니다.\n3. 네트워크 ACL 목록의 네트워크 ACL ID를 선택합니다.\n4. 인바운드 규칙 탭을 선택합니다.\n5. 포트 범위가 "모두"이고 허용/거부가 "허용"인 규칙이 존재하는지 확인합니다.\n6. 아웃바운드 규칙 탭을 선택합니다.\n7. 포트 범위가 "모두"이고 허용/거부가 "허용"인 규칙이 존재하는지 확인합니다.\n8. 모든 네트워크 ACL 목록에 대해서 반복합니다.',
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '네트워크 ACL'을 선택합니다.\n3. 네트워크 ACL 목록의 네트워크 ACL ID를 선택합니다.\n4. 인바운드 규칙의 '인바운드 규칙 편집' 버튼을 선택합니다.\n5. 포트 범위가 \"모두\"이고 허용/거부가 \"허용\"인 규칙 우측의 '제거' 버튼을 선택합니다.\n6. '변경 사항 저장' 버튼을 선택합니다.\n7. 아웃바운드 규칙의 '아웃바운드 규칙 편집' 버튼을 선택합니다.\n8. 포트 범위가 \"모두\"이고 허용/거부가 \"허용\"인 규칙 우측의 '제거' 버튼을 선택합니다.\n9. '변경 사항 저장' 버튼을 선택합니다\n10. 모든 네트워크 ACL 목록에 대해서 반복합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/VPC/network-acl-inbound-traffic-all-ports.html\nhttps://www.cloudconformity.com/knowledge-base/aws/VPC/network-acl-outbound-traffic-all-ports.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "VPC_009",
    risk: "상",
    name: "VPC 엔드포인트가 외부에 노출되어있는지 확인하시오.",
    description:
      'VPC 엔드 포인트가 공개되어 있으면 인터넷 게이트웨이, NAT 또는 방화벽 프록시를 통하지 않고도 VPC와 AWS에서 호스팅하는 서비스와 비공개로 연결할 수 있습니다.\n\n액세스 정책 내에서 Principal 요소의 값이 "*"으로 설정된 경우 VPC 엔드 포인트는 AWS 계정의 자격증명을 사용해 VPC 내의 모든 IAM 사용자 또는 서비스에 대한 전체 액세스를 허용합니다.\n\n이러한 방식으로 전체 액세스를 허용하는 것은 나쁜 관행이고, 보안 문제로 이어질 수 있기 때문에 VPC 엔드 포인트가 외부에 노출되지 않도록 전체 액세스를 차단해야합니다. 전체 액세스를 차단하기 위해서는 액세스 정책 내에서 Principal 요소 값이 유효한 AWS 계정(예:123456789012) 혹은 AWS 계정 ARN(예: arn:aws:iam::123456789012:root)와 같은 계정 식별자로 설정되어야 합니다.',
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '엔드포인트'을 선택합니다.\n3. 엔드포인트 목록을 차례로 선택합니다.\n4. '작업' 버튼을 선택하고 '정책 편집' 버튼을 선택합니다. ('정책 편집' 버튼이 비활성화 되어 있는 경우도 있습니다.)\n5. \"모든 액세스\" 라디오 버튼이 선택되어 있는지 확인합니다.\n6. \"사용자 지정\" 라디오 버튼이 선택되어 있다면, Principal 요소가 \"*\"로 설정되어 있는지 확인합니다.\n7. 모든 엔트포인트 목록에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '엔드포인트'을 선택합니다.\n3. 엔드포인트 목록을 차례로 선택합니다.\n4. '작업' 버튼을 선택하고 '정책 편집' 버튼을 선택합니다. ('정책 편집' 버튼이 비활성화 되어 있는 경우도 있습니다.)\n5. '사용자 지정' 라디오 버튼을 선택합니다.\n6. Principal 요소가 특정 AWS 계정 또는 IAM 사용자를 가리키도록 수정합니다.\n7. '저장' 버튼을 선택합니다.\n8. 모든 엔트포인트 목록에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/vpc-endpoints.html\nhttps://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/vpc-endpoints-iam.html\nhttps://www.cloudconformity.com/knowledge-base/aws/VPC/endpoint-exposed.html\r\nhttps://www.cloudconformity.com/knowledge-base/aws/VPC/endpoint-cross-account-access.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "VPC_010",
    risk: "상",
    name: "AWS Organization 구성원 이외의 계정과 연결된 VPC 피어링 연결이 존재하는지 확인하시오.",
    description:
      "AWS Organization의 멤버 계정 간의 트래픽만 허용하도록 VPC 피어링 통신을 올바르게 구성하면 조직 리소스를 외부에 공개하지 않도록 격리할 수 있습니다.\n\n외부에 공개되어 있는 VPC 피어링이 존재하는지 확인하기 위해서 AWS Organization의 AWS 계정외의 계정과 연결된 VPC 피어링이 존재하는지 확인해야 합니다.",
    inspection:
      "1. AWS Organization 마스터 계정에 로그인하고 https://console.aws.amazon.com/organizations/ 에서 AWS Organization 콘솔을 엽니다.\n2. '계정' 탭을 선택합니다.\n3. 계정 목록의 '계정 ID'를 기록합니다.\n4. https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n5. 왼쪽 메뉴에서 '피어링 연결'을 선택합니다.\n6. 피어링 연결 목록에서 요청자 소유자와 수락자 소유자가 기록해둔 계정 ID와 일치하지 않는 것이 있는지 확인합니다.\n7. 모든 피어링 연결에 대해서 반복합니다.",
    action:
      "1. AWS Organization 마스터 계정에 로그인하고 https://console.aws.amazon.com/organizations/ 에서 AWS Organization 콘솔을 엽니다.\n2. '계정' 탭을 선택합니다.\n3. 계정 목록의 '계정 ID'를 기록합니다.\n4. https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n5. 왼쪽 메뉴에서 '피어링 연결'을 선택합니다.\n6. 피어링 연결 목록에서 요청자 소유자와 수락자 소유자가 기록해둔 계정 ID와 일치하지 않는 것이 있다면 해당 열을 우클릭합니다.\n7. VPC 피어링 연결 삭제 버튼을 선택합니다.\n8. 모든 피어링 연결에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/vpc/latest/peering/vpc-peering-basics.html\nhttps://www.cloudconformity.com/knowledge-base/aws/VPC/vpc-peering-connections-to-accounts-outside-aws-organizations.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "VPC_011",
    risk: "상",
    name: "기본 VPC가 사용되고 있는지 확인하시오.",
    description:
      "기본 VPC를 생성하게 되면 인터넷 게이트웨이가 연결되고 사용자의 인스턴스는 EC2-Classic과 마찬가지로 Public IP 주소를 자동으로 할당받습니다. 이처럼 보안 모범사례를 지키지 않거나 의도하지 않은 일부 기본 구성이 제공될 수 있기 때문에 기본 VPC를 사용하지 않는 것이 좋습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 'VPC'를 선택합니다.\n3. VPC 목록에 기본 VPC가 \"예\"인 항목이 존재하는지 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 'VPC'를 선택합니다.\n3. 기본 VPC가 \"예\"인 열을 우클릭한 후 'VPC 삭제'를 선택합니다.\n4. \"기본 VPC 삭제\"를 입력한 후 '삭제' 버튼을 선택합니다.",
    reference:
      "https://aws.amazon.com/ko/vpc/faqs/\nhttps://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/default-vpc.html\nhttps://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "VPC_012",
    risk: "상",
    name: "AWS VPN에 두 터널이 활성화되어 있는지 확인하시오.",
    description:
      "AWS VPN에는 유지 관리시에 장애 조치 전략으로 두 터널을 항상 활성화되도록 구성해야 합니다.\n\n이를 통해 두 개의 활성화된 터널 중 하나의 터널을 사용할 수 없게 될 때에도 중지 없이 트래픽 흐름을 유지하는 가용성을 확보할 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '사이트간 VPN 연결'을 선택합니다.\n3. VPN 목록에서 VPN을 선택합니다.\n4. 'Tunnel Details' 탭을 선택합니다.\n5. 두 개의 터널이 존재하고 상태가 모두 'UP'인지 확인합니다.\n6. 모든 VPN 연결 목록에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '사이트간 VPN 연결'을 선택합니다.\n3. 업데이트 해야하는 VPN 연결을 선택합니다.\n4. '구성 다운로드' 버튼을 선택합니다.\n5. '예, 다운로드' 버튼을 선택합니다.\n6. '고객 게이트웨이' 대시보드에 로그인하고 'VPN'을 선택합니다.\n7. IPSec 터널의 '추가' 버튼을 선택합니다.\n8. 세부사항을 입력하고 '저장' 버튼을 선택합니다.\n9. 모든 VPN 연결 목록에 대해서 반복합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/VPC/vpn-tunnel-redundancy.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "VPC_013",
    risk: "상",
    name: "NAT Gateway가 2개 이상의 가용영역(AZ)에서 구현되어 있는지 확인하시오.",
    description:
      "Private 서브넷에 포함된 인스턴스들에 인터넷에서 액세스하지 못하도록 하면서 펌웨어 업그레이드 등과 같은 목적으로 인터넷에 연결해야할 경우가 있을 수 있습니다. 이러한 상황에서 NAT Gateway를 사용할 수 있습니다. NAT Gateway를 생성하려면 NAT Gateway가 상주할 Public 서브넷을 지정해야하고, NAT Gateway를 생성할 때 연결할 Elastic IP(Public IP)를 지정해줘야 합니다.\n\n만약 여러 가용영역에 리소스가 존재하지만 모든 리소스가 하나의 NAT Gateway에 연결되어 있다면 해당 Public 서브넷에 장애가 발생할 경우 해당 NAT Gateway에 연결된 모든 리소스는 인터넷에 연결할 수 없습니다.\n\n따라서, Public 서브넷이 이미 2개 이상의 가용영역(AZ)에 구성되어 있다면, NAT Gateway도 Public 서브넷이 위치한 서로다른 2개 이상의 가용영역에 이중화하여 구성하는 것이 좋습니다. 이렇게 서로 다른 가용영역에 NAT Gateway를 구성할 경우 Fault Tolerance(장애 허용)와 High Availability(고가용성)의 효과를 가질 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 'NAT 게이트웨이'를 선택합니다.\n4. NAT 게이트웨이 필터링에 점검할 VPC ID를 입력합니다.\n5. 결과 NAT 게이트웨이가 1개라면 점검을 종료하고 다음 VPC로 넘어갑니다.\n6. 결과 NAT 게이트웨이가 2개 이상이라면 연결되어 있는 '서브넷'을 기록합니다.\n7. 왼쪽 메뉴에서 '서브넷'을 선택합니다.\n8. 서브넷 목록에서 기록해둔 서브넷들이 서로 다른 가용영역에 위치한지 확인합니다.\n9. 모든 VPC에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 'NAT 게이트웨이'를 선택합니다.\n3. 'NAT 게이트웨이 생성' 버튼을 선택합니다.\n4. 이미 NAT 게이트웨이가 1개 존재한다면 기존 NAT 게이트웨이가 위치한 서브넷과 다른 서브넷을 선택하고, 존재하지 않는다면 임의의 서브넷을 선택합니다.\n5. 이름, 탄력적 IP 할당 ID를 입력합니다.\n6. 'NAT 게이트웨이 생성' 버튼을 선택합니다.\n7. 모든 VPC에 대해서 반복합니다.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf\nhttps://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/vpc-nat-gateway.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "VPC_014",
    risk: "상",
    name: "각 Tier를 위한 서브넷을 2개 이상의 가용영역(AZ)에 생성했는지 확인하시오.",
    description:
      "대부분의 AWS 리전은 2개 이상의 가용영역(AZ)가 존재한다. 예를들면, ap-northeast-2 리전에는 ap-northeast-1a, ap-northeast-1b, ap-northeast-1c, ap-northeast-1d의 네개의 가용영역이 존재한다.\n\n2개 이상의 가용영역이 존재하는 리전에 리소스를 만들때 서로 다른 2개 이상의 가용영역에 서브넷을 생성해야 합니다. 이렇게 서로 다른 가용영역에 서브넷을 생성할 경우 리소스 배포 관점에서 Fault Tolerance(장애 허용)와 High Availability(고가용성)의 효과를 가질 수 있습니다.",
    inspection: "",
    action: "",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "VPC_015",
    risk: "상",
    name: "Public 서브넷(Web-tier ELB)에 연결된 라우팅 테이블에 0.0.0.0/0에서 Internet Gateway로 라우팅하는 규칙이 존재하는지 확인하시오.",
    description:
      "Web-tier ELB는 외부에서 액세스할 수 있는 Public 서브넷에 포함되고, 외부의 요청을 받아 Web-tier로 전달하는 역할을 합니다. 이때 Web-tier ELB가 포함된 Public 서브넷에 연결된 라우팅 테이블에는 NAT Gateway로 전달된 트래픽을 외부로 보내는 등 Public 서브넷에 포함된 인스턴스들의 트래픽을 외부로 전송하기 위해 0.0.0.0/0에서 Internet Gateway(IGW)로 라우팅하는 규칙이 존재해야 합니다.\n\n만약 이러한 라우팅 규칙이 존재하지 않는다면, 해당 VPC의 Private 서브넷에서 NAT Gateway로 전송하는 트래픽이 외부로 전송되지 못하며, 해당 Public 서브넷에서도 외부와 통신을 할 수 없게됩니다. 이는 해당 서비스를 사용하는 사용자의 가용성에 문제를 일으킬 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '서브넷'을 선택합니다.\n3. Public 서브넷의 '서브넷 ID'을 선택합니다.\n4. '라우팅 테이블' 탭을 선택합니다.\n5. 대상이 '0.0.0.0/0', 'igw-xxxxxxxx'인 규칙이 존재하는지 확인합니다.\n6. 모든 Public 서브넷에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '서브넷'을 선택합니다.\n3. Public 서브넷의 '서브넷 ID'을 선택합니다.\n4. 세부정보에 '라우팅 테이블' 을 선택합니다.\n5. '라우팅' 탭을 선택합니다.\n6. '라우팅 편집' 버튼을 선택합니다.\n7. 첫 번째 대상에 '0.0.0.0/0'을 입력합니다.\n8. 두 번째 대상에 Internet Gateway(igw-xxxxxxxx)을 입력합니다.\n9. '라우팅 저장' 버튼을 선택합니다.\n10. 모든 Public 서브넷에 대해서 반복합니다.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "VPC_016",
    risk: "상",
    name: "Private 서브넷(Web-tier, App-tier, Data-tier)에 연결된 라우팅 테이블에 0.0.0.0/0 NAT Gateway로 라우팅하는 규칙이 존재하는지 확인하시오.",
    description:
      "외부에서 접근은 안되야 하는게 당연. 하지만 내부(각 티어)에서 외부에서 다운로드(업데이트와 같은 사유)와 같은 이유로 통신이 가능해야 할 경우 NAT Gateway를 사용할 수 있다. \n\n따라서 Private 서브넷에 연결된 라우팅 테이블에는 0.0.0.0/0에서 NAT Gateway로 라우팅하는 규칙이 존재해야 한다.\n\n조금 더 고민해보면 외부로 접근할 필요가 없는 Private 서브넷에서는 굳이 없어도 된다는말 아닌가..?\n\n노랑 항목과 합치면 될듯. 분리되어있어야 할 이유가 별로없는거 같은데\n\nPrivate 서브넷에 포함된 인스턴스들은 Default(0.0.0.0/0) 트래픽에 대해서 NAT 게이트웨이로 트래픽을 보내는 기본 경로만을 가지는 라우팅 테이블에 연결되어 있어야 합니다.\n\n이렇게 구성하게 되면 Private 서브넷에 포함된 인스턴스는 NAT 게이트웨이를 통해 Elastic IP(Public IP)를 할당받고 외부로 나갈 수 있습니다. 하지만, 외부에서는 Private 서브넷에 포함된 인스턴스에 접근할 수 없습니다.\n\nPrivate 서브넷에 연결된 라우팅 테이블에 기본 경로를 제외한 다른 경로가 존재한다면...?\n\n삭제 건의",
    inspection: "",
    action:
      "Private 서브넷에서 외부 통신이 필요없는 경우는 NAT Gateway로 트래픽을 보낼 필요가 없고, 만약 필요한 경우에 구성되어 있지 않은 경우에도 그닥 보안상 문제가될건 없어보이는데..",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "VPC_017",
    risk: "상",
    name: "Web-tier ELB에 연결된 보안그룹이 80(HTTP)/443(HTTPS)포트의 인바운드 트래픽만을 허용하도록 구성되어 있는지 확인하시오.",
    description:
      "보안그룹은 인바운드 및 아웃바운드 트래픽을 제어하는 인스턴스의 가상 방화벽 역할을 합니다. 보안그룹은 서브넷 수준이 아니라 인스턴스 수준에서 동작하며 해당 인스턴스에대한 인바운드 및 아웃바운드 트래픽을 제어합니다.\n\n3-Tier 아키텍처에서 Web-tier ELB 인스턴스는 외부 인터넷에서 오는 80(HTTP)/443(HTTPS) 이외의 포트에 대한 트래픽을 수신할 필요가 없습니다. 따라서 Web-tier ELB에 연결된 보안그룹은 80(HTTP)/443(HTTPS) 포트에 대해서만 모든 출발지 IP(0.0.0.0/0)의 연결을 허용하는 규칙을 포함해야 합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안 그룹'을 선택합니다.\n3. 보안 그룹 목록에서 Web-tier ELB 인스턴스에 연결된 보안 그룹을 선택합니다.\n4. '인바운드 규칙' 탭을 선택합니다.\n5. 유형이 'HTTP', 포트 범위가 '80'이고, 소스가 '0.0.0.0/0', '::/0'인 규칙이 존재하는지 확인합니다.\n6. 유형이 'HTTPS', 포트 범위가 '443'이고, 소스가 '0.0.0.0/0', '::/0'인 규칙이 존재하는지 확인합니다.\n7. 위 두가지 규칙을 제외한 규칙이 존재하는지 확인합니다.\n8. Web-tier ELB 인스턴스에 연결된 모든 보안 그룹에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안 그룹'을 선택합니다.\n3. 보안 그룹 목록에서 Web-tier ELB 인스턴스에 연결된 보안 그룹을 선택합니다.\n4. '인바운드 규칙' 탭을 선택합니다.\n5. '인바운드 규칙 편집' 버튼을 선택합니다.\n6. 모든 규칙 오른쪽의 '삭제' 버튼을 선택합니다.\n7. '규칙 추가' 버튼을 선택합니다.\n8. 유형을 'HTTP'로 선택하고, 소스를 '위치 무관'으로 선택합니다.\n9. '규칙 추가' 버튼을 선택합니다.\n10. 유형을 'HTTPS'로 선택하고, 소스를 '위치 무관'으로 선택합니다.\n11. '규칙 저장' 버튼을 선택합니다.\n12. Web-tier ELB 인스턴스에 연결된 모든 보안 그룹에 대해서 반복합니다.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "VPC_018",
    risk: "상",
    name: "Web-tier에 연결된 보안그룹이 Web-tier ELB에 연결된 보안그룹으로부터의 인바운드 트래픽만을 허용하도록 구성되어 있는지 확인하시오.",
    description:
      "보안그룹은 인바운드 및 아웃바운드 트래픽을 제어하는 인스턴스의 가상 방화벽 역할을 합니다. 보안그룹은 서브넷 수준이 아니라 인스턴스 수준에서 동작하며 해당 인스턴스에대한 인바운드 및 아웃바운드 트래픽을 제어합니다.\n\n3-Tier 아키텍처에서 Web-tier에 포함된 인스턴스들은 Web-tier ELB 인스턴스 외에서 오는 트래픽을 수신할 필요가 없습니다. 따라서 Web-tier에 포함된 인스턴스들에 연결된 보안그룹은 Web-tier ELB 인스턴스에 연결된 보안그룹에서 보내는 인바운드 트래픽만 허용하도록 구성해야 합니다. \n\n이렇게 하면 Web 서버가 포함되는 Web-tier의 인스턴스들을 무단 액세스로부터 보호할 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안 그룹'을 선택합니다.\n3. 보안 그룹 목록에서 Web-tier에 포함된 인스턴스들에 연결된 보안 그룹을 선택합니다.\n4. '인바운드 규칙' 탭을 선택합니다.\n5. 유형이 '모든 트래픽' 이고, 소스가 Web-tier ELB 인스턴스에 연결된 보안 그룹인 규칙이 존재하는지 확인합니다.\n6. 위 규칙을 제외한 규칙이 존재하는지 확인합니다.\n7. Web-tier에 포함된 인스턴스들에 연결된 모든 보안 그룹에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안 그룹'을 선택합니다.\n3. 보안 그룹 목록에서 Web-tier에 포함된 인스턴스들에 연결된 보안 그룹을 선택합니다.\n4. '인바운드 규칙' 탭을 선택합니다.\n5. '인바운드 규칙 편집' 버튼을 선택합니다.\n6. 모든 규칙 오른쪽의 '삭제' 버튼을 선택합니다.\n7. '규칙 추가' 버튼을 선택합니다.\n8. 유형을 '모든 트래픽'으로 선택하고, 소스를 Web-tier ELB 인스턴스에 연결된 보안그룹을 선택합니다.\n9. '규칙 저장' 버튼을 선택합니다.\n10. Web-tier에 포함된 인스턴스들에 연결된 모든 보안 그룹에 대해서 반복합니다.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "VPC_019",
    risk: "상",
    name: "App-tier ELB에 연결된 보안그룹이 Web-tier에 연결된 보안그룹으로부터의 인바운드 트래픽만을 허용하도록 구성되어 있는지 확인하시오.",
    description:
      "보안그룹은 인바운드 및 아웃바운드 트래픽을 제어하는 인스턴스의 가상 방화벽 역할을 합니다. 보안그룹은 서브넷 수준이 아니라 인스턴스 수준에서 동작하며 해당 인스턴스에대한 인바운드 및 아웃바운드 트래픽을 제어합니다.\n\n3-Tier 아키텍처에서 App-tier ELB 인스턴스는 Web-tier에 포함된 인스턴스들 외에서 오는 트래픽을 수신할 필요가 없습니다. 따라서 App-tier ELB 인스턴스에 연결된 보안그룹은 Web-tier에 포함된 인스턴스들에 연결된 보안그룹에서 보내는 인바운드 트래픽만 허용하도록 구성해야 합니다. \n\n이렇게 하면 App-tier ELB 인스턴스를 무단 액세스로부터 보호할 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안 그룹'을 선택합니다.\n3. 보안 그룹 목록에서 App-tier ELB 인스턴스에 연결된 보안 그룹을 선택합니다.\n4. '인바운드 규칙' 탭을 선택합니다.\n5. 유형이 '모든 트래픽' 이고, 소스가 Web-tier에 포함된 인스턴스들에 연결된 보안 그룹인 규칙이 존재하는지 확인합니다.\n6. 위 규칙을 제외한 규칙이 존재하는지 확인합니다.\n7. App-tier ELB 인스턴스에 연결된 모든 보안 그룹에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안 그룹'을 선택합니다.\n3. 보안 그룹 목록에서 App-tier ELB 인스턴스에 연결된 보안 그룹을 선택합니다.\n4. '인바운드 규칙' 탭을 선택합니다.\n5. '인바운드 규칙 편집' 버튼을 선택합니다.\n6. 모든 규칙 오른쪽의 '삭제' 버튼을 선택합니다.\n7. '규칙 추가' 버튼을 선택합니다.\n8. 유형을 '모든 트래픽'으로 선택하고, 소스를 Web-tier에 포함된 인스턴스들에 연결된 보안그룹을 선택합니다.\n9. '규칙 저장' 버튼을 선택합니다.\n10. App-tier ELB 인스턴스에 연결된 모든 보안 그룹에 대해서 반복합니다.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "VPC_020",
    risk: "상",
    name: "App-tier에 연결된 보안그룹이 App-tier ELB에 연결된 보안그룹으로부터의 인바운드 트래픽만을 허용하도록 구성되어 있는지 확인하시오.",
    description:
      "보안그룹은 인바운드 및 아웃바운드 트래픽을 제어하는 인스턴스의 가상 방화벽 역할을 합니다. 보안그룹은 서브넷 수준이 아니라 인스턴스 수준에서 동작하며 해당 인스턴스에대한 인바운드 및 아웃바운드 트래픽을 제어합니다.\n\n3-Tier 아키텍처에서 App-tier에 포함된 인스턴스들은 App-tier ELB 인스턴스 외에서 오는 트래픽을 수신할 필요가 없습니다. 따라서 App-tier에 연결된 보안그룹은 App-tier ELB에 연결된 보안그룹에서 보내는 인바운드 트래픽만 허용하도록 구성해야 합니다. \n\n이렇게 하면 Web Application System(WAS)가 포함되는 App-tier에 포함된 인스턴스들을 무단 액세스로부터 보호할 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안 그룹'을 선택합니다.\n3. 보안 그룹 목록에서 App-tier에 포함된 인스턴스들에 연결된 보안 그룹을 선택합니다.\n4. '인바운드 규칙' 탭을 선택합니다.\n5. 유형이 '모든 트래픽' 이고, 소스가 App-tier ELB 인스턴스에 연결된 보안 그룹인 규칙이 존재하는지 확인합니다.\n6. 위 규칙을 제외한 규칙이 존재하는지 확인합니다.\n7. App-tier에 포함된 인스턴스들에 연결된 모든 보안 그룹에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안 그룹'을 선택합니다.\n3. 보안 그룹 목록에서 App-tier에 포함된 인스턴스들에 연결된 보안 그룹을 선택합니다.\n4. '인바운드 규칙' 탭을 선택합니다.\n5. '인바운드 규칙 편집' 버튼을 선택합니다.\n6. 모든 규칙 오른쪽의 '삭제' 버튼을 선택합니다.\n7. '규칙 추가' 버튼을 선택합니다.\n8. 유형을 '모든 트래픽'으로 선택하고, 소스를 App-tier ELB 인스턴스에 연결된 보안그룹을 선택합니다.\n9. '규칙 저장' 버튼을 선택합니다.\n10. App-tier에 포함된 인스턴스들에 연결된 모든 보안 그룹에 대해서 반복합니다.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "VPC_021",
    risk: "상",
    name: "Data-tier에 연결된 보안그룹이 App-tier에 연결된 보안그룹으로부터의 인바운드 트래픽만을 허용하도록 구성되어 있는지 확인하시오.",
    description:
      "보안그룹은 인바운드 및 아웃바운드 트래픽을 제어하는 인스턴스의 가상 방화벽 역할을 합니다. 보안그룹은 서브넷 수준이 아니라 인스턴스 수준에서 동작하며 해당 인스턴스에대한 인바운드 및 아웃바운드 트래픽을 제어합니다.\n\n3-Tier 아키텍처에서 Data-tier에 포함된 인스턴스들은 App-tier에 포함된 인스턴스들 외에서 오는 트래픽을 수신할 필요가 없습니다. 따라서 Data-tier에 연결된 보안그룹은 App-tier에 포함된 인스턴스들에 연결된 보안그룹에서 보내는 인바운드 트래픽만 허용하도록 구성해야 합니다. \n\n이렇게 하면 데이터베이스 서버가가 포함되는 Data-tier에 대한 무단 액세스로부터 보호할 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안 그룹'을 선택합니다.\n3. 보안 그룹 목록에서 Data-tier에 포함된 인스턴스들에 연결된 보안 그룹을 선택합니다.\n4. '인바운드 규칙' 탭을 선택합니다.\n5. 유형이 '모든 트래픽' 이고, 소스가 App-tier에 포함된 인스턴스들에 연결된 보안 그룹인 규칙이 존재하는지 확인합니다.\n6. 위 규칙을 제외한 규칙이 존재하는지 확인합니다.\n7. Data-tier에 포함된 인스턴스들에 연결된 모든 보안 그룹에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '보안 그룹'을 선택합니다.\n3. 보안 그룹 목록에서 Data-tier에 포함된 인스턴스들에 연결된 보안 그룹을 선택합니다.\n4. '인바운드 규칙' 탭을 선택합니다.\n5. '인바운드 규칙 편집' 버튼을 선택합니다.\n6. 모든 규칙 오른쪽의 '삭제' 버튼을 선택합니다.\n7. '규칙 추가' 버튼을 선택합니다.\n8. 유형을 '모든 트래픽'으로 선택하고, 소스를 Web-tier ELB 인스턴스에 연결된 보안그룹을 선택합니다.\n9. '규칙 저장' 버튼을 선택합니다.\n10. Data-tier에 포함된 인스턴스들에 연결된 모든 보안 그룹에 대해서 반복합니다.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "로그 관리",
    index: "VPC_022",
    risk: "상",
    name: "각 VPC의 네트워크 인터페이스를 오가는 트래픽을 CloudWatch Logs/Amazon S3에 캡처해 관리하는 흐름로그가 존재하는지 확인하시오.",
    description:
      "VPC 흐름 로그는 VPC에 존재하는 네트워크 인터페이스에서 송/수신되는 트래픽에 대한 정보를 수집할 수 있는 기능입니다. 흐름 로그에서 수집한 데이터는 Amazon CloudWatch Logs 또는 Amazon S3 Bucket로 전송되어서 저장됩니다.\n\n흐름 로그를 활성화할 경우\n1. 지나치게 제한적인 보안그룹 규칙 진단\n2. 인스턴스에 도달하는 네트워크 트래픽 모니터링\n3. 네트워크 인터페이스를 오가는 트래픽의 방향 결정\n와 같은 작업에 도움이 될 수 있습니다.\n\nVPC 흐름 로그를 활성화하면 과도하게 허용되는 보안그룹 및 NACL와 같은 보안 및 액세스 문제를 감지하고, 거부된 연결 요청 혹은 비정상적인 수준의 데이터 전송과 같은 트리거된 활동을 알릴 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 'VPC'를 선택합니다.\n3. VPC 목록의 VPC ID를 선택합니다.\n4. '플로우 로그' 탭을 선택합니다.\n5. 플로우 로그 목록에 생성되어있는 플로우 로그가 존재하는지 확인합니다.\n6. 모든 VPC에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 'VPC'를 선택합니다.\n3. VPC 목록의 VPC ID를 선택합니다.\n4. '플로우 로그' 탭을 선택합니다.\n5. '플로우 로그 생성' 버튼을 선택합니다.\n6. 세부사항을 입력한 후 '플로우 로그 생성' 버튼을 선택합니다.\n7. 모든 VPC에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/vpc-security-best-practices.html\nhttps://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/VPC_Security.html\nhttps://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/flow-logs.html\nhttps://www.cloudconformity.com/knowledge-base/aws/VPC/vpc-flow-logs-enabled.html",
    provider: "AWS",
  },
  {
    classification: "로그 관리",
    index: "VPC_023",
    risk: "상",
    name: "각 Subnet의 네트워크 인터페이스를 오가는 트래픽을 CloudWatch Logs/Amazon S3에 캡처해 관리하는 흐름로그가 존재하는지 확인하시오.",
    description:
      "VPC 흐름 로그는 VPC에 존재하는 네트워크 인터페이스에서 송/수신되는 트래픽에 대한 정보를 수집할 수 있는 기능입니다.. 흐름 로그에서 수집한 데이터는 Amazon CloudWatch Logs 또는 Amazon S3 Bucket로 전송되어서 저장됩니다..\n\n흐름 로그를 활성화할 경우\n1. 지나치게 제한적인 보안그룹 규칙 진단\n2. 인스턴스에 도달하는 네트워크 트래픽 모니터링\n3. 네트워크 인터페이스를 오가는 트래픽의 방향 결정\n와 같은 작업에 도움이 될 수 있습니다.\n\nVPC 흐름 로그를 활성화하면 과도하게 허용되는 보안그룹 및 NACL와 같은 보안 및 액세스 문제를 감지하고, 거부된 연결 요청 혹은 비정상적인 수준의 데이터 전송과 같은 트리거된 활동을 알릴 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '서브넷'을 선택합니다.\n3. 서브넷 목록의 서브넷 ID를 선택합니다.\n4. '플로우 로그' 탭을 선택합니다.\n5. 플로우 로그 목록에 생성되어있는 플로우 로그가 존재하는지 확인합니다.\n6. 모든 서브넷에 대해서 반복합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/vpc/ 에서 VPC 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 '서브넷'을 선택합니다.\n3. 서브넷 목록의 서브넷 ID를 선택합니다.\n4. '플로우 로그' 탭을 선택합니다.\n5. '플로우 로그 생성' 버튼을 선택합니다.\n6. 세부사항을 입력한 후 '플로우 로그 생성' 버튼을 선택합니다.\n7. 모든 서브넷에 대해서 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/vpc-security-best-practices.html\nhttps://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/VPC_Security.html\nhttps://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/flow-logs.html\nhttps://www.cloudconformity.com/knowledge-base/aws/VPC/vpc-flow-logs-enabled.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_001",
    risk: "상",
    name: "AWS 계정 Root 사용자가 30일 이내에 사용된 적 있는지 확인하시오.",
    description:
      "액세스 키를 사용하여 프로그래밍 방식으로 AWS에 요청을 보낼 수 있습니다. AWS 계정 Root 사용자의 액세스 키는 결제 정보를 포함하여 모든 AWS 서비스의 전체 리소스에 대해 액세스 권한을 가집니다. AWS 계정 Root 사용자에 부여된 권한은 줄일 수 없습니다.\n\n따라서 AWS 계정의 Root 사용자는 사용하지 않는 것이 좋습니다.",
    inspection:
      "　　 - AWS Console\n1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) ‘자격 증명 보고서’를 클릭한다.\n5) ‘보고서 다운로드’를 클릭하여, .xls 파일형식의 보고서를 확인하다. 해당 보고서는 root 계정과 모든 IAM 유저들의 자격증명을 포함하고 있다.\n - 보고서의 <root_account> 계정의 password_last_used가 30일 이내의 날짜인지 확인한다.\n - 보고서의 <root_account> 계정의 access_key_1_active가 TRUE라면, access_key_1_last_used_date가 30일보다 오래됐는지 확인한다.\n - 보고서의 <root_account> 계정의 access_key_2_active가 TRUE라면, access_key_2_last_used_date가 30일보다 오래됐는지 확인한다.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 사용자 세부 정보 설정란에 이름을 입력 항 후 AWS 액세스 유형을 선택합니다. 그리고 비밀번호 재설정 필요를 체크하고 다음:권한버튼을 클릭하시오.\n6) 권한 설정 페이지에서 기존 정책 직접 연결 옵션을 클릭하시오. 그 다음 EC2 인스턴스에 대한 액세스가 필요한 경우 AmazonEC2FullAccess정책을 선택하시오. 그 다음 다음:태그 버튼을 클릭하시오.\n7) 태그 값이 필요한 경우 태그를 추가하시오. 그 다음 다음:검토를 클릭하시오\n8) 마지막으료 사용자 만들기 버튼을 클릭하여 계정을 생성하시오\n9) .CVS 다운로드 버튼을 클릭하여 계정 정보를 저장하시오. 해당 파일을 다운로드 했다면, 다시 IAM 사용자 페이지로 이동합니다.\n10) 새로 생성한 해당 계정의 이름을 클릭하여 요약 페이지로 이동하시오.\n11) 해당 페이지에서 보안 자격 증명을 클릭하시오.\n12) 해당 탭에서 로그인 자격 증명의 할당된 MFA 디바이스의 할당되지 않음 옆 관리 버튼을 클릭하시오.\n13) MFA 디바이스 관리 창에서 추가할 MFA 디바이스를 체크 하시고 계속 버튼을 클릭하시오.(현재 문서에서는 가상 MFA Google Authenticator를 이용하겠습니다.)\n14) 호환 되는 모바일 디바이스에 Google Authenticator를 설치한 후 해당 앱에서 QR 코드를 스캔하시오. 그 다음 MFA 코드 1,2를 채우시오.\n15) MFA할당을 클릭하시오. ",
    reference:
      "https://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-security-audit-guide.html#aws-security-audit-review-account\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/root-account-used-recently.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_002",
    risk: "상",
    name: "AWS 계정 Root 사용자의 활성화된 액세스 키가 존재하는지 확인하시오.",
    description:
      "액세스 키를 사용하여 프로그래밍 방식으로 AWS에 요청을 보낼 수 있습니다. AWS 계정 Root 사용자의 액세스 키는 결제 정보를 포함하여 모든 AWS 서비스의 전체 리소스에 대해 액세스 권한을 가집니다. AWS 계정 Root 사용자에 부여된 권한은 줄일 수 없습니다.\n\n따라서 신용카드 번호 똔는 다른 중요한 기밀 정보와 같이 AWS 계정 Root 사용자의 액세스 키를 보호해야 합니다. 이를 위한 몇 가지 방법이 있습니다.\n\n1. AWS 계정 Root 사용자의 액세스 키가 없다면 필요할 때까지 만들지 말아야 합니다.\n2. AWS 계정 Root 사용자의 액세스 키가 존재한다면 삭제하고, 계속 유지해야 할 경우 주기적으로 액세스 키를 교체해야 합니다.\n3. 다른 사람과 AWS 계정 Root 사용자의 액세스 키를 공유하지 말아야 합니다.\n4. AWS 계정 Root 사용자 계정에 MFA(Multi-Factor Authentication)을 활성화해야 합니다.\n\nAWS 계정을 보호하는 가장 좋은 방법 중 하나는 AWS 계정 Root 사용자의 액세스 키를 생성하지 않는 것입니다.",
    inspection:
      " - AWS Console\n1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) ‘자격 증명 보고서’를 클릭한다.\n5) ‘보고서 다운로드’를 클릭하여, .xls 파일형식의 보고서를 확인하다. 해당 보고서는 root 계정과 모든 IAM 유저들의 자격증명을 포함하고 있다.\n6) 보고서에 <root_account> 계정의 ‘access_key_1_active’ 그리고 ‘access_key_2_active’ 필드들의 값이 False인지 확인한다.\n",
    action:
      "  - AWS Console\n1) Root 계정으로 AWS 콘솔에 접속한다.\n2) AWS 계정이름이나 혹은 계정 번호를 클릭한다.\n3) 클릭 후 내 보안 자격 증명을 클릭한다.\n4) 해당 페이지에서 액세스 키를 클릭한다.\n5) 액세스 키에 활성화가 되어 있는 키를 작업열에서 삭제를 클릭한다. \n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#lock-away-credentials\nhttps://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-access-keys-best-practices.html\nhttps://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-security-audit-guide.html#aws-security-audit-review-account\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/root-account-access-keys-present.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_003",
    risk: "상",
    name: "AWS 계정 Root 사용자의 액세스 키가 30일 이내에 재발급되었는지 확인하시오.",
    description:
      "액세스 키를 사용하여 프로그래밍 방식으로 AWS에 요청을 보낼 수 있습니다. AWS 계정 Root 사용자의 액세스 키는 결제 정보를 포함하여 모든 AWS 서비스의 전체 리소스에 대해 액세스 권한을 가집니다. AWS 계정 Root 사용자에 부여된 권한은 줄일 수 없습니다.\n\n따라서 신용카드 번호 똔는 다른 중요한 기밀 정보와 같이 AWS 계정 Root 사용자의 액세스 키를 보호해야 합니다. 이를 위한 몇 가지 방법이 있습니다.\n\n1. AWS 계정 Root 사용자의 액세스 키가 없다면 필요할 때까지 만들지 말아야 합니다.\n2. AWS 계정 Root 사용자의 액세스 키가 존재한다면 삭제하고, 계속 유지해야 할 경우 주기적으로 액세스 키를 교체해야 합니다.\n3. 다른 사람과 AWS 계정 Root 사용자의 액세스 키를 공유하지 말아야 합니다.\n4. AWS 계정 Root 사용자 계정에 MFA(Multi-Factor Authentication)을 활성화해야 합니다.",
    inspection:
      "　 - AWS Console\n1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) ‘자격 증명 보고서’를 클릭한다.\n5) ‘보고서 다운로드’를 클릭하여, .xls 파일형식의 보고서를 확인하다. 해당 보고서는 root 계정과 모든 IAM 유저들의 자격증명을 포함하고 있다.\n - 보고서의 <root_account> 계정의 access_key_1_active가 TRUE라면, access_key_1_rotated가 30일보다 오래됐는지 확인한다.\n - 보고서의 <root_account> 계정의 access_key_2_active가 TRUE라면, access_key_2_rotated가 30일보다 오래됐는지 확인한다.\n",
    action:
      "  - AWS Console\n1) Root 계정으로 AWS 콘솔에 접속한다.\n2) AWS 계정이름이나 혹은 계정 번호를 클릭한다.\n3) 클릭 후 내 보안 자격 증명을 클릭한다.\n4) 해당 페이지에서 액세스 키를 클릭한다.\n5) 오래된 액세스 키를 키를 작업열에서 삭제를 클릭한다. \n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#lock-away-credentials\nhttps://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-security-audit-guide.html#aws-security-audit-review-account",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_004",
    risk: "상",
    name: "AWS 계정 Root 사용자의 X.509 서명이 활성화되어 있는지 확인하시오.",
    description:
      "X.509 인증서를 사용하여 일부 AWS 서비스에 안전한 SOAP 프로토콜 요청을 수행합니다. AWS 계정을 보호하고 모범 사례를 준수하기 위해서 AWS 계정 Root 사용자가 X.509 인증서를 사용해 AWS 서비스에 대한 SOAP 프로토콜 요청을 수행하고 있지 않은지 확인해야 합니다.\n\nX.509 인증서는 API 요청 유효성 검사 목적으로 사용되는 서명 인증서이고, 일부 AWS 서비스는 이 X.509 인증서를 사용해 서명된 요청을 승인합니다. AWS 계정 Root 사용자를 사용하여 일상적인 작업을 수행하거나 AWS 애플리케이션 개발을 하는 것은 모범 사례를 위배하는 것이기 때문에 AWS 계정 Root 사용자의 X.509 인증서를 비활성화 해야합니다.\n\nAWS 계정 Root 사용자에 생성된 X.509 서명 인증서를 비활성화하면 개인 인증서 키를 도난당하거나 실수로 공유하는 등에 대한 무단 액세스 위험이 제거됩니다.",
    inspection:
      "　　 - AWS Console\n1) AWS 콘솔에 접속한다.\n2) 우측 상단에 위치한 AWS 계정 이름 혹은 번호를 클릭합니다.\n3) 하단의 나비게이터에 '내 보안 자격 증명'을 클릭한다.\n4) 해당 페이지의 'X.509 인증서'를 클릭한다.\n5) 해당 탭의 표에 Active 되어 있는 인증서가 존재하는지 확인하시오.\n",
    action:
      "  - AWS Console\n1) Root 계정으로 AWS 콘솔에 접속한다.\n2) AWS 계정이름이나 혹은 계정 번호를 클릭한다.\n3) 클릭 후 내 보안 자격 증명을 클릭한다.\n4) 해당 페이지에서 X.509 인증서탭을 클릭하시오.\n5) 인증성 생성 페이지에서 파일을 다운로드 받은 후 닫기를 누르시오.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/root-active-certificates.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_005",
    risk: "상",
    name: "AWS 계정 Root 사용자의 MFA가 활성화되어 있는지 확인하시오.",
    description:
      "AWS MFA(Multi-Factor Authentication)은 AWS 환경에 적용할 수 있는 보안 수준을 높여줍니다. MFA가 활성화된 상태에서 사용자가 AWS에 로그인할 때 기존 자격증명외의 인증코드를 입력하라는 메시지를 표시합니다.\n\nAWS 계정 Root 사용자를 MFA로 보호하는 것은 공격자로부터 AWS 리소스 및 서비스를 보호하는 효과적인 방법입니다. MFA는 기존 Root 사용자의 자격증명 위에 추가 보호 계층을 추가하여 MFA 생성 암호 없이는 AWS 계정 Root 사용자에 침투할 수 없도록 합니다.\n\n따라서 보안 강화를 위해 AWS 계정 Root 사용자의 MFA를 활성화하는 것이 좋습니다. ",
    inspection:
      "  - AWS Console\n1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) ‘자격 증명 보고서’를 클릭한다.\n5) ‘보고서 다운로드’를 클릭하여, .xls 파일형식의 보고서를 확인하다. 해당 보고서는 root 계정과 모든 IAM 유저들의 자격증명을 포함하고 있다.\n - 보고서의 <root_account> 계정의 mfa_active가 FALSE인지 확인한다.\n",
    action:
      "  - AWS Console\n1) Root 계정으로 AWS 콘솔에 접속한다.\n2) AWS 계정이름이나 혹은 계정 번호를 클릭한다.\n3) 클릭 후 내 보안 자격 증명을 클릭한다.\n4) 해당 페이지에서 멀티 팩터 인증(MFA)를 클릭하시오.\n5) 해당 탭에서 MFA 활성화 버튼을 클릭하시오.\n6) MFA 디바이스 관리 창에서 추가할 MFA 디바이스를 체크 하시고 계속 버튼을 클릭하시오.(현재 문서에서는 가상 MFA Google Authenticator를 이용하겠습니다.)\n7) 호환 되는 모바일 디바이스에 Google Authenticator를 설치한 후 해당 앱에서 QR 코드를 스캔하시오. 그 다음 MFA 코드 1,2를 채우시오.\n8) MFA할당 버튼을 클릭하시오. \n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#enable-mfa-for-privileged-users\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/root-mfa-enabled.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_006",
    risk: "상",
    name: "AWS 계정 Root 사용자가 하드웨어 MFA가 활성화되어 있는지 확인하시오.",
    description:
      "AWS MFA(Multi-Factor Authentication)은 AWS 환경에 적용할 수 있는 보안 수준을 높여줍니다. MFA가 활성화된 상태에서 사용자가 AWS에 로그인할 때 기존 자격증명외의 인증코드를 입력하라는 메시지를 표시합니다.\n\nAWS 리소스에 대한 액세스를 보호하고 모범사례 준수를 위해 AWS 계정 Root 사용자에 대한 하드웨어 MFA가 활성화되어 있는지 확인해야 합니다.\n\n하드웨어 MFA는 공격 표면이 최소화되고 공격자가 하드웨어 장치에 물리적으로 액세스하지 않는 한 해킹될 수 없기 때문에 가상 MFA보다 훨씬 안전하고 효율적입니다. 하드웨어 MFA는 기존 AWS 계정 Root 사용자의 자격증명에 추가 보호 계층을 추가해 MFA 생성 암호 없이는 AWS 계정 Root 사용자에 침투할 수 없도록 합니다.\n\nAWS 계정 Root 사용자에 대한 하드웨어 기반 MFA 보호 기능은 공격자로부터 AWS 리소스 및 서비스를 보호하는 가장 좋은 방법입니다.",
    inspection:
      "　　 - AWS Console\n1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 보안 상태(Security Status) 아래에서 MFA의 활성화 여부를 확인합니다. MFA가 활성화되지 않은 경우, 알림 기호가 Activate MFA on your 루트 사용자(루트 사용자에서 MFA 활성화) 옆에 표시됩니다.\n",
    action:
      "  - AWS Console\n1) Root 계정으로 AWS 콘솔에 접속한다.\n2) AWS 계정이름이나 혹은 계정 번호를 클릭한다.\n3) 클릭 후 내 보안 자격 증명을 클릭한다.\n4) 해당 페이지에서 멀티 팩터 인증(MFA)를 클릭하시오.\n5) 해당 탭에서 MFA 활성화 버튼을 클릭하시오.\n6) MFA 디바이스 관리 창에서 다른 하드웨어 MFA 디바이스를 클릭하시오\n7) 디바이스 일렬 번호, MFA 코드 1,2를 채우시오.\n8) MFA할당 버튼을 클릭하시오.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/id_credentials_mfa_enable_physical.html\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/root-hardware-mfa.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_007",
    risk: "상",
    name: "AdministratorAccess 관리형 정책을 가진 관리자용 IAM 사용자가 존재하는지 확인하시오.",
    description:
      "액세스 키를 사용하여 프로그래밍 방식으로 AWS에 요청을 보낼 수 있습니다. AWS 계정 Root 사용자의 액세스 키는 결제 정보를 포함하여 모든 AWS 서비스의 전체 리소스에 대해 액세스 권한을 가집니다. AWS 계정 Root 사용자에 부여된 권한은 줄일 수 없습니다.\n\n따라서 관리자에 대해서도 IAM 사용자를 만들어 관리 권한(AdministratorAccess)을 부여한 후 모든 관리 작업에 대해서 해당 IAM 사용자 계정을 사용하도록 해야합니다.\n\n이후 모든 상호작용은 AWS 계정 Root 사용자 대신 IAM 사용자를 통해 이루어져야 합니다.",
    inspection:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 검사하고자 하는 IAM 계정을 클릭한다.\n6) ‘권한’ 탭을 확인한다.\n7) 해당 탭에 'AdministratorAccess'정책이 부여되었는지 확인한다.\n\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 사용자 세부 정보 설정란에 이름을 입력 항 후 AWS 액세스 유형을 선택합니다. 그리고 비밀번호 재설정 필요를 체크하고 다음:권한버튼을 클릭하시오.\n6) 권한 설정 페이지에서 기존 정책 직접 연결 옵션을 클릭하시오. 그 다음 EC2 인스턴스에 대한 액세스가 필요한 경우 AmazonEC2FullAccess정책을 선택하시오. 그 다음 다음:태그 버튼을 클릭하시오.\n7) 태그 값이 필요한 경우 태그를 추가하시오. 그 다음 다음:검토를 클릭하시오\n8) 마지막으료 사용자 만들기 버튼을 클릭하여 계정을 생성하시오\n9) .CVS 다운로드 버튼을 클릭하여 계정 정보를 저장하시오. 해당 파일을 다운로드 했다면, 다시 IAM 사용자 페이지로 이동합니다.\n10) 새로 생성한 해당 계정의 이름을 클릭하여 요약 페이지로 이동하시오.\n11) 해당 페이지에서 보안 자격 증명을 클릭하시오.\n12) 해당 탭에서 로그인 자격 증명의 할당된 MFA 디바이스의 할당되지 않음 옆 관리 버튼을 클릭하시오.\n13) MFA 디바이스 관리 창에서 추가할 MFA 디바이스를 체크 하시고 계속 버튼을 클릭하시오.(현재 문서에서는 가상 MFA Google Authenticator를 이용하겠습니다.)\n14) 호환 되는 모바일 디바이스에 Google Authenticator를 설치한 후 해당 앱에서 QR 코드를 스캔하시오. 그 다음 MFA 코드 1,2를 채우시오.\n15) MFA할당을 클릭하시오. ",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#create-iam-users\nhttps://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-access-keys-best-practices.html\nhttps://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/getting-started_create-admin-group.html\nhttps://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-security-audit-guide.html#aws-security-audit-review-account\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/root-account-used-recently.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_008",
    risk: "상",
    name: "AWS 계정 설정에 대체 연락처 세부 정보가 설정되어있는지 확인하시오.",
    description:
      "대체 연락처 세부 정보가 설정되면 보안 관리자가 부재중이더라도 Amazon이 해당 AWS 계정에서 발견된 보안 문제에 대해서 대체 연락처를 통해 다른 사람에게 연락할 수 있습니다.",
    inspection:
      "　　 - AWS Console\n1) AWS 콘솔에 접속한다.\n2) 우측 상단에 위치한 AWS 계정 이름 혹은 번호를 클릭합니다.\n3) 하단의 나비게이터에 '내 계정'을 클릭한다.\n4) 해당 페이지의 '대체 연락처'탭을 확인한다.\n5) 해당 탭에서 결제, 운영, 보안 연락처가 있는지 확인하시오.\n",
    action:
      "　　 - AWS Console\n1) AWS 콘솔에 접속한다.\n2) 우측 상단에 위치한 AWS 계정 이름 혹은 번호를 클릭합니다.\n3) 하단의 나비게이터에 '내 계정'을 클릭한다.\n4) 해당 페이지의 '대체 연락처'탭을 확인한다.\n5) 해당 탭에서 결제, 운영, 보안 연락처에 정보를 입력하시오.\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awsaccountbilling/latest/aboutv2/manage-account-payment.html\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/account-security-alternate-contacts.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_009",
    risk: "상",
    name: "AWS 계정 설정에 보안 챌린지 질문 구성이 설정되어있는지 확인하시오.",
    description:
      "보안 챌린지 질문은 AWS 계정이 손상되거나 고객 서비스에 도움을 요청해야 할 때 Amazon이 신원확인을 위해 이용하는 질문입니다. 계정 소유자는 AWS 지원 포털을 통한 지원 혹은 AWS 고객 서비스 호출하는 개인을 인증하기 위한 수단으로 보안 챌린지 질문을 사용하게 됩니다.\n\n기본적으로 AWS 계정에는 보안 챌린지 질문이 설정되어 있지 않습니다. 보안 챌린지 질문을 활성화하고 구성하면 계정에 보안 계층이 추가됩니다.",
    inspection:
      "　　 - AWS Console\n1) AWS 콘솔에 접속한다.\n2) 우측 상단에 위치한 AWS 계정 이름 혹은 번호를 클릭합니다.\n3) 하단의 나비게이터에 '내 계정'을 클릭한다.\n4) 해당 페이지의 '보안 챌린지 질문 구성'탭을 확인한다.\n5) 해당 탭에서 보안 질문이 설정되어 있는지 확인하시오.\n",
    action:
      "　　 - AWS Console\n1) AWS 콘솔에 접속한다.\n2) 우측 상단에 위치한 AWS 계정 이름 혹은 번호를 클릭합니다.\n3) 하단의 나비게이터에 '내 계정'을 클릭한다.\n4) 해당 페이지의 '보안 챌린지 질문 구성'탭을 확인한다.\n5) 해당 탭에서 보안 질문이 설정하시오.\n",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/security-challenge-questions.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_010",
    risk: "상",
    name: "IAM 암호 정책이 사용중인지 확인하시오.",
    description:
      "IAM 사용자가 직접 암호를 변경하도록 허용할 경우 강력한 암호를 만들고 주기적으로 암호를 변경하도록 해야 합니다.\n\n또한, 암호 정책은 암호 복잡성 요구사항을 적용하는데 사용됩니다. IAM 암호 정책을 사용해 암호가 서로 다른 문자 집합으로 구성되어있는지 확인할 수 있습니다.\n\nIAM 사용자의 암호의 강도, 패턴 및 교체를 적용하는 것은 AWS 계정의 보안을 유지하는데 매우 중요합니다. 강력한 암호 정책을 사용하면 암호 추측 및 무차별 대입 공격으로부터의 위험을 크게 줄일 수 있습니다.",
    inspection:
      "       - AWS Console\n1) IAM 계정 설정을 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘액세스 관리’에 ‘계정 설정’을 클릭한다.\n5) ‘암호 정책 설정’을 확인한다.\n - ‘1개 이상의 라틴 알파벳 대문자(A-Z) 필수’ 항목에 체크가 되어있는지 확인한다.\n - ‘1개 이상의 라틴 알파벳 소문자(a-z) 필수’ 항목에 체크가 되어있는지 확인한다.\n - ‘1개 이상의 숫자 필수’ 항목에 체크가 되어있는지 확인한다.　\n - ‘영숫자를 제외한 문자 1개 이상 필수 (! @ # $ % ^ & * ( ) _ + - = [ ] { } | ')’ 항목에 체크가 되어있는지 확인한다.\n\n\n\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘계정설정'을 클릭한다.\n5) 비밀번호 저책 탭에서 비밀번호 정책을 설정/수정 합니다.\n - ‘1개 이상의 라틴 알파벳 대문자(A-Z) 필수’ 항목에 체크가 되어있는지 확인한다.\n - ‘1개 이상의 라틴 알파벳 소문자(a-z) 필수’ 항목에 체크가 되어있는지 확인한다.\n - ‘1개 이상의 숫자 필수’ 항목에 체크가 되어있는지 확인한다.　\n - ‘영숫자를 제외한 문자 1개 이상 필수 (! @ # $ % ^ & * ( ) _ + - = [ ] { } | ')’ 항목에 체크가 되어있는지 확인한다.\n\n\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#configure-strong-password-policy\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/password-policy.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_011",
    risk: "상",
    name: "강력한 IAM 암호 정책을 설정했는지 확인하시오.",
    description:
      "IAM 사용자가 직접 암호를 변경하도록 허용할 경우 강력한 암호를 만들고 주기적으로 암호를 변경하도록 해야 합니다.\n\n또한, 암호 정책은 암호 복잡성 요구사항을 적용하는데 사용됩니다. IAM 암호 정책을 사용해 암호가 서로 다른 문자 집합으로 구성되어있는지 확인할 수 있습니다.\n\nIAM 사용자의 암호의 강도, 패턴 및 교체를 적용하는 것은 AWS 계정의 보안을 유지하는데 매우 중요합니다. 강력한 암호 정책을 사용하면 암호 추측 및 무차별 대입 공격으로부터의 위험을 크게 줄일 수 있습니다.",
    inspection:
      "       - AWS Console\n1) IAM 계정 설정을 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘액세스 관리’에 ‘계정 설정’을 클릭한다.\n5) ‘암호 정책 설정’을 확인한다.\n - ‘1개 이상의 라틴 알파벳 대문자(A-Z) 필수’ 항목에 체크가 되어있는지 확인한다.\n - ‘1개 이상의 라틴 알파벳 소문자(a-z) 필수’ 항목에 체크가 되어있는지 확인한다.\n - ‘1개 이상의 숫자 필수’ 항목에 체크가 되어있는지 확인한다.　\n - ‘영숫자를 제외한 문자 1개 이상 필수 (! @ # $ % ^ & * ( ) _ + - = [ ] { } | ')’ 항목에 체크가 되어있는지 확인한다.\n\n\n\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘계정설정'을 클릭한다.\n5) 비밀번호 저책 탭에서 비밀번호 정책을 설정/수정 합니다.\n - ‘1개 이상의 라틴 알파벳 대문자(A-Z) 필수’ 항목에 체크가 되어있는지 확인한다.\n - ‘1개 이상의 라틴 알파벳 소문자(a-z) 필수’ 항목에 체크가 되어있는지 확인한다.\n - ‘1개 이상의 숫자 필수’ 항목에 체크가 되어있는지 확인한다.　\n - ‘영숫자를 제외한 문자 1개 이상 필수 (! @ # $ % ^ & * ( ) _ + - = [ ] { } | ')’ 항목에 체크가 되어있는지 확인한다.\n\n\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#configure-strong-password-policy\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/password-policy.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_012",
    risk: "상",
    name: "IAM 암호 정책이 14자 이상의 암호를 요구하도록 설정했는지 확인하시오.",
    description:
      "IAM 사용자가 직접 암호를 변경하도록 허용할 경우 강력한 암호를 만들고 주기적으로 암호를 변경하도록 해야 합니다.\n\n또한, 암호 정책은 암호 복잡성 요구사항을 적용하는데 사용됩니다. IAM 암호 정책을 사용해 암호가 서로 다른 문자 집합으로 구성되어있는지 확인할 수 있습니다.\n\nIAM 사용자의 암호의 강도, 패턴 및 교체를 적용하는 것은 AWS 계정의 보안을 유지하는데 매우 중요합니다. 강력한 암호 정책을 사용하면 암호 추측 및 무차별 대입 공격으로부터의 위험을 크게 줄일 수 있습니다.",
    inspection:
      "　　- AWS Console\n1) IAM 계정 설정을 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘액세스 관리’에 ‘계정 설정’을 클릭한다.\n5) ‘암호 정책 설정’을 확인한다.\n - ‘최소 암호 길이 적용’ 항목에 ‘14자’ 이상의 길이가 필요한지 확인한다.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘계정설정'을 클릭한다.\n5) 비밀번호 저책 탭에서 비밀번호 정책을 설정/수정 합니다.\n - ‘최소 암호 길이 적용’ 항목에 ‘14자’ 이상의 길이가 필요한지 확인한다.\n\n\n\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#configure-strong-password-policy\nhttps://d5.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/password-policy.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_013",
    risk: "상",
    name: "IAM 암호 정책이 암호 재사용을 방지하도록 설정했는지 확인하시오.",
    description:
      "IAM 사용자가 직접 암호를 변경하도록 허용할 경우 강력한 암호를 만들고 주기적으로 암호를 변경하도록 해야 합니다.\n\n또한, 암호 정책은 암호 복잡성 요구사항을 적용하는데 사용됩니다. IAM 암호 정책을 사용해 암호가 서로 다른 문자 집합으로 구성되어있는지 확인할 수 있습니다.\n\nIAM 사용자의 암호의 강도, 패턴 및 교체를 적용하는 것은 AWS 계정의 보안을 유지하는데 매우 중요합니다. 강력한 암호 정책을 사용하면 암호 추측 및 무차별 대입 공격으로부터의 위험을 크게 줄일 수 있습니다.",
    inspection:
      "　- AWS Console\n1) IAM 계정 설정을 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘액세스 관리’에 ‘계정 설정’을 클릭한다.\n5) ‘암호 정책 설정’을 확인한다.\n - ‘암호 재사용 제한’ 항목에 체크가 되어있는지 확인한다.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘계정설정'을 클릭한다.\n5) 비밀번호 저책 탭에서 비밀번호 정책을 설정/수정 합니다.\n - '암호 재사용 제한'항목에 체크가 되어있는지 확인한다.\n\n\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#configure-strong-password-policy\nhttps://d6.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/password-policy.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_014",
    risk: "상",
    name: "IAM 암호 정책이 암호를 90일 이내에 만료하도록 설정했는지 확인하시오.",
    description:
      "IAM 사용자가 직접 암호를 변경하도록 허용할 경우 강력한 암호를 만들고 주기적으로 암호를 변경하도록 해야 합니다.\n\n또한, 암호 정책은 암호 복잡성 요구사항을 적용하는데 사용됩니다. IAM 암호 정책을 사용해 암호가 서로 다른 문자 집합으로 구성되어있는지 확인할 수 있습니다.\n\nIAM 사용자의 암호의 강도, 패턴 및 교체를 적용하는 것은 AWS 계정의 보안을 유지하는데 매우 중요합니다. 강력한 암호 정책을 사용하면 암호 추측 및 무차별 대입 공격으로부터의 위험을 크게 줄일 수 있습니다.",
    inspection:
      "　　　- AWS Console\n1) IAM 계정 설정을 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘액세스 관리’에 ‘계정 설정’을 클릭한다.\n5) ‘암호 정책 설정’을 확인한다.\n - ‘암호 만료 활성화’ 항목에 체크가 되어있는지 확인한다.\n - ‘암호 만료’일 수가 ‘90‘일인지 확인한다.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘계정설정'을 클릭한다.\n5) 비밀번호 저책 탭에서 비밀번호 정책을 설정/수정 합니다.\n - ‘암호 만료 활성화’ 항목에 체크가 되어있는지 확인한다.\n - ‘암호 만료’일 수가 ‘90‘일인지 확인한다.\n\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#configure-strong-password-policy\nhttps://d7.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/password-policy.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_015",
    risk: "상",
    name: "모든 IAM 사용자가 IAM 패스워드 정책에 맞게 설정하였는지 확인하시오.",
    description:
      "IAM 사용자가 직접 암호를 변경하도록 허용할 경우 강력한 암호를 만들고 주기적으로 암호를 변경하도록 해야 합니다.\n\n또한, 암호 정책은 암호 복잡성 요구사항을 적용하는데 사용됩니다. IAM 암호 정책을 사용해 암호가 서로 다른 문자 집합으로 구성되어있는지 확인할 수 있습니다.\n\nIAM 사용자의 암호의 강도, 패턴 및 교체를 적용하는 것은 AWS 계정의 보안을 유지하는데 매우 중요합니다. 강력한 암호 정책을 사용하면 암호 추측 및 무차별 대입 공격으로부터의 위험을 크게 줄일 수 있습니다.",
    inspection: "/",
    action: "/",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#configure-strong-password-policy\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/password-policy.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_016",
    risk: "상",
    name: "암호가 만료되거나 만료일이 7일 이내인 IAM 사용자가 존재하는지 확인하시오.",
    description:
      "이건 Trend꺼고 만료된다고해서 문제될건 없을거 같아서 삭제를 고려하는 중.",
    inspection:
      "　 - AWS Console\n1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) ‘자격 증명 보고서’를 클릭한다.\n5) ‘보고서 다운로드’를 클릭하여, .xls 파일형식의 보고서를 확인하다. 해당 보고서는 모든 IAM 유저들(root계정 제외)의 자격증명을 포함하고 있다.\n - 보고서의 IAM 유저들(root계정 제외)의 password_last_changed의 값을 확인한다.\n - 보고서의 IAM 유저들(root계정 제외)의 password_next_rotation의 값을 확인한다.\n6) 두 시간의 차이가 만약 7일 이내인지 확인하시오.",
    action: "비밀 번호 변경 필요",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/IAM/password-expiry-in-7-days.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_017",
    risk: "상",
    name: "사용하지 않는(90일 이내) IAM 자격증명이 존재하는지 확인하시오.",
    description:
      "AWS 계정의 보안을 강화하기 위해 필요 없는 IAM 사용자의 자격증명(암호 및 액세스 키)를 삭제해야 합니다. 예를 들어, IAM 사용자가 조직을 떠나거나 더 이상 AWS 계정에 액세스할 필요가 없는 경우 해당 사용자의 자격증명을 작동하지 않도록 삭제해야 합니다. 삭제하지 않는다면 적어도 사용하지 않는 IAM 사용자의 자격증명을 비활성화 해야합니다.\n\nIAM 사용자 자격증명은 나중에 필요할 경우 언제든지 다시 생성할 수 있습니다.\n\n사용하지 않는 IAM 사용자 자격증명을 삭제하거나 비활성화 함으로써 해당 자격증명을 이용해 AWS 계정의 리소스에 액세스할 수 없게 되고, 그에 따라서 승인되지 않은 액세스로부터 AWS 클라우드의 리소스를 보호할 수 있습니다.",
    inspection:
      "　 - AWS Console\n1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) ‘자격 증명 보고서’를 클릭한다.\n5) ‘보고서 다운로드’를 클릭하여, .xls 파일형식의 보고서를 확인하다. 해당 보고서는 root 계정과 모든 IAM 유저들의 자격증명을 포함하고 있다.\n - 보고서의  IAM계정들의 access_key_1_active, access_key_2_active 가 TRUE인지 확인하고 만약 TRUE라면 사용 기간을 확인하여 90일 이내인지 확인하시오.\n - 보고서의 IAM계정들의 mfa_active가 TRUE인지 확인하시오.\n - password_enabled 이 TRUE인지 확인하고 만약 TRUE라면 사용 기간을 확인하여 90일 이내인지 확인하시오.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 삭제하고자 하는 사용자 열에서 좌측 체크박스에 체크를 하시오.\n6) 패널 상단에 위치한 사용자 삭제 버튼을 클릭하여 해당 계정을 삭제하시오",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/id_credentials_finding-unused.html\nhttps://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-access-keys-best-practices.html\nhttps://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-security-audit-guide.html#aws-security-audit-review-users\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/credentials-last-used.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_018",
    risk: "상",
    name: "IAM 사용자 생성과정에서 액세스 키가 생성되는지 확인하시오.",
    description:
      "AWS Management 콘솔 암호를 가지는 IAM 사용자에 대해서 초기 설정 중에 생성된 IAM 액세스 키를 보유하고 있는 IAM 사용자가 존재하는지 확인해야 합니다.\n\nIAM 사용자에 대해서 초기 설정 중에 액세스 키를 생성하게 되면, 불필요한 액세스 키가 생성될 수 있고 이를 통해 AWS 계정에 무단 액세스가 발생할 수 있습니다.\n\n따라서 해당 IAM 사용자에게 액세스 키가 필요할 경우 별도의 단계를 거쳐 IAM 사용자에게 액세스 키를 부여하는게 좋습니다. 별도의 단계를 거쳐 액세스 키를 부여하게 되면 해당 액세스 키가 필요에 의해서 생성되었다는 것을 보일 수 있습니다.",
    inspection:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 검사하고자 하는 IAM 계정을 클릭한다.\n6) 해당 계정의 생성 시간을 확인한다.\n7) 그 다음 보안 자격 증명탭을 클릭한다.\n8) 해당 탭에서 액세스 키의 생성 시간을 확인한다.\n9) 계정 생성 시간과 액세스 키 생성 시간이 동일하다면 사용자 설정 중에 생성된 것임으로 시간이 같은지 확인하시오.\n\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 액세스 키를 생성하고자 하는 IAM 계정을 클릭한다.\n6) 그 다음 보안 자격 증명탭을 클릭한다.\n7) 해당 탭에서 액세스 키 만들기버튼을 클릭한다.\n8) .csv파일을 다운로드 받은 후 닫기 표시를 누르시오.\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-security-audit-guide.html#aws-security-audit-review-users\nhttps://d0.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/access-keys-during-initial-iam-user-setup.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_019",
    risk: "상",
    name: "IAM 사용자의 액세스 키가 30일 이내에 교체되었는지 확인하시오.",
    description:
      "최상의 보안을 위해 IAM 사용자의 액세스 키를 정기적으로 교체(회전)하는 것이 좋습니다. 관리자가 필요한 권한을 부여한 경우 사용자 고유의 액세스 키를 교체할 수 있습니다.\n\nIAM 사용자의 액세스 키를 90일마다 회전시킴으로써 IAM 사용자의 액세스 키가 손상되거나 노출되었을 때 공격자에 의해서 해당 액세스 키가 사용될 기회를 줄일 수 있습니다. 액세스 키를 90일마다 회전시켜 Lost, Cracked, Stolen 되었을 때 해당 액세스 키로 AWS 계정의 리소스에 액세스 할 수 없도록 해야 합니다.\n\n이러한 IAM 사용자의 액세스 키 회전주기는 30일, 45일 등으로 지정할 수 있지만 적어도 90일 이내에 IAM 사용자의 액세스 키를 회전하도록 해야 합니다.",
    inspection:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 검사하고자 하는 IAM 계정을 클릭한다.\n6) 그 다음 보안 자격 증명탭을 클릭한다.\n7) 해당 탭에서 액세스 키의 생성 시간을 확인한다.\n8) 액세스 키의 생성 완료 시간이 30일 이내인지 확인하시오.\n\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 액세스 키를 교체하고자 하는 IAM 계정을 클릭한다.\n6) 그 다음 보안 자격 증명탭을 클릭한다.\n7) 해당 탭에서 액세스 키 만들기버튼을 클릭한다.\n8) .csv파일을 다운로드 받은 후 닫기 표시를 누르시오.\n9) 그 다음 생성된지 30일이 넘은 액세스 키의 상태를 비활성화 한 뒤 삭제하시오.\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-access-keys-best-practices.html\nhttps://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/id_credentials_access-keys.html#Using_RotateAccessKey\nhttps://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-security-audit-guide.html#aws-security-audit-review-users\nhttps://d0.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/access-keys-rotated-30-days.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_020",
    risk: "상",
    name: "2개의 액세스 키가 활성화된 IAM 사용자가 존재하는지 확인하시오.",
    description:
      "보안 모범 사례에 의하면 불필요한 IAM 사용자 액세스 키를 식별하고 비활성화 해야 합니다. IAM 사용자에게는 최대 2개의 액세스 키를 활성화 시킬 수 있지만, 이는 액세스 키를 교체하는 과정에서만 사용할 것을 권장합니다.\n\n불필요한 IAM 사용자의 액세스 키를 제거하면 AWS 계정 리소스 및 구성 요소에 대한 무단 액세스 위험이 줄어들고 보안 모범 사례를 준수할 수 있습니다.",
    inspection:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 검사하고자 하는 IAM 계정을 클릭한다.\n6) 해당 창에서 보안 작겨 증명탭을 클릭한다.\n7) 해당 탭에서 액세스 키에 액세스 키가 2개 이상있는지 확인하시오.\n8) 만약 2개 이상이라면 둘 다 상태가 (활성)인지 확인하시오.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 액세스 키를 교체하고자 하는 IAM 계정을 클릭한다.\n6) 그 다음 보안 자격 증명탭을 클릭한다.\n9) 해당 페이지에서 액세스 키에 두 개의 액세스 키 중 하나를 비활성화 하시오.\n",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/IAM/unnecessary-access-keys.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_021",
    risk: "상",
    name: "2개 이상의 SSH Public Key가 활성화된 IAM 사용자가 존재하는지 확인하시오.",
    description:
      "IAM 사용자의 SSH Public Key는 AWS CodeCommit 레포지토리를 인증하는데 사용됩니다. 불필요한 IAM 사용자 SSH Public Key를 식별하고 비활성화 해야 합니다. IAM 사용자에게는 최대 2개의 SSH Public Key를 활성화할 수 있지만, 이는 SSH Public Key를 교체하는 과정에서만 사용할 것을 권장합니다.\n\n불필요한 IAM 사용자의 SSH Public Key를 제거하면 AWS CodeCommit 레포지토리에 대한 무단 액세스 위험이 줄어들고 보안 모범 사례를 준수할 수 있습니다.",
    inspection:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 검사하고자 하는 IAM 계정을 클릭한다.\n6) 해당 창에서 보안 작겨 증명탭을 클릭한다.\n7) 해당 탭에서 AWS CodeCommit에 대한 SSH키 탭을 확인하시오.\n8) 2개 이상의 SSH 퍼블릭 키가 있는지 확인하시오\n9) 만약 존재한다면, 모두 상태가 (활성)인지 확인하시오.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 검사하고자 하는 IAM 계정을 클릭한다.\n6) 해당 창에서 보안 작겨 증명탭을 클릭한다.\n7) 해당 탭에서 AWS CodeCommit에 대한 SSH키 탭을 확인하시오.\n8) 두 개 이상의 Public Key 중 하나를 하나만 빼고 모두 비활성화 하시오\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/id_credentials_ssh-keys.html\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/unnecessary-ssh-public-keys.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_022",
    risk: "상",
    name: "SSH Public Key가 90일 이내에 재발급 되었는지 확인하시오.",
    description:
      "IAM 사용자의 SSH Public Key는 AWS CodeCommit 레포지토리를 인증하는데 사용됩니다. AWS CodeCommit 레포지토리에 대한 무단 액세스 위험을 줄이기 위해 IAM 사용자의 SSH Public Key는 적어도 90일 이내에 재발급하는 것이 좋습니다.\n\nIAM 사용자의 SSH Public Key를 주기적으로 재발급함으로써 사용자 모르게 공격자가 노출되거나 크랙된 SSH Public Key 세트를 이용해 AWS CodeCommit에서 호스팅하는 개인 레포지토리에 액세스할 수 있는 기회를 줄일 수 있습니다.",
    inspection:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 검사하고자 하는 IAM 계정을 클릭한다.\n6) 해당 창에서 보안 작겨 증명탭을 클릭한다.\n7) 해당 탭에서 AWS CodeCommit에 대한 SSH키 탭을 확인하시오.\n8) SSH 퍼블릭 키가 있는지 확인하시오\n9) 만약 존재한다면, 업로드됨 의 탭에 날짜가 90일 이내인지 확인하시오.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 검사하고자 하는 IAM 계정을 클릭한다.\n6) 해당 창에서 보안 작겨 증명탭을 클릭한다.\n7) 해당 탭에서 AWS CodeCommit에 대한 SSH키 탭을 확인하시오.\n8) SSH 퍼블릭 키 업로드 버튼을 클릭하시오.\n9) 가지고 있는 퍼블릭 키를 해당 업로드 란에 업로드 한 뒤 SSH 퍼블릭 키 업로드 버튼을 클릭하여 업로드 하시오.\n10)  그 다음 90일 초과된 키를 비활성화 한 뒤 삭제하시오.\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/id_credentials_ssh-keys.html\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/ssh-public-keys-rotated-90-days.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_023",
    risk: "상",
    name: "모든 IAM 사용자에 MFA가 활성화되어 있는지 확인하시오.",
    description:
      "AWS MFA(Multi-Factor Authentication)은 AWS 환경에 적용할 수 있는 보안 수준을 높여줍니다. MFA가 활성화된 상태에서 사용자가 AWS에 로그인할 때 기존 자격증명외의 인증코드를 입력하라는 메시지를 표시합니다.\n\nIAM 사용자를 MFA로 보호하는 것은 공격자로부터 AWS 리소스 및 서비스를 보호하는 효과적인 방법입니다. MFA는 기존 IAM 사용자의 자격증명 위에 추가 보호 계층을 추가하여 MFA 생성 암호 없이는 IAM 사용자에 침투할 수 없도록 합니다.\n\n따라서 보안 강화를 위해 모든 IAM 사용자의 MFA를 활성화하는 것이 좋습니다. ",
    inspection:
      "　 - AWS Console\n1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) ‘자격 증명 보고서’를 클릭한다.\n5) ‘보고서 다운로드’를 클릭하여, .xls 파일형식의 보고서를 확인하다. 해당 보고서는 root 계정과 모든 IAM 유저들의 자격증명을 포함하고 있다.\n - 보고서의  IAM계정들의 mfa_active가 TRUE인지 확인하시오\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 삭제하고자 하는 사용자 열에서 좌측 체크박스에 체크를 하시오.\n6) 패널 상단에 위치한 사용자 삭제 버튼을 클릭하여 해당 계정을 삭제하시오",
    reference:
      "https://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-security-audit-guide.html#aws-security-audit-review-users\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/mfa-device-deactivated.html\r\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/iam-user-multi-factor-authentication-enabled.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_024",
    risk: "상",
    name: "IAM 사용자에게 연결된 IAM 정책이 존재하는지 확인하시오.",
    description:
      "개별 IAM 사용자에 대해 권한을 정의하는 대신, 관련된 그룹을 만드는 것이 더 편리할 수 있습니다. AWS 계정 내에 존재하는 IAM 사용자들에게 효율적으로 권한을 할당할 수 있고, 사용자 기반 액세스를 보다 효율적으로 관리할 수 있습니다.\n\n이를 통해 액세스 관리의 복잡성이 줄어들고, 실수로 과도한 권한을 부여할 가능성이 줄어들게 됩니다.\n\nIAM 그룹을 생성하고 해당 그룹에 필요한 권한을 부여합니다. 이후, IAM 사용자를 해당 그룹에 할당하게 되면 그룹에 할당된 모든 권한은 IAM 사용자에게 상속됩니다. 따라서 한 번에 그룹 내 모든 IAM 사용자들에 변경 사항을 적용할 수 있습니다. ",
    inspection:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 검사하고자 하는 IAM 계정을 클릭한다.\n6) 해당 창에서 권한 탭을 확인한다.\n7) 해당 탭에서 'Permissions policies'를 확인한다.\n8) 정책 중 'Access'정책이 하나 이상 있는지 확인한다.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 변경하고자 하는 IAM 계정을 클릭한다.\n6) 해당 창에서 권한 탭을 확인한다.\n7) 해당 탭에서 'Permissions policies'를 확인한다.\n8) 정책 중 정책 이름 행에서 전체 이름을 복사 한 뒤 계정과 연결을 해제하시오.\n9) 위의 연결이 해제된 정책들은 그룹을 통해 다시 연결이 됩니다.\n10) 좌측에서 '그룹'을 선택합니다.\n11) 그룹에서 새 그룹 생성 버튼을 클릭하여 그룹을 생성하시오.\n12) 8)번에서 해제된 정책들을 모두 그룹 정책에 연결하시오.\n13) 그룹을 생성하시오.\n14) 그룹 구성 페이지에서 사용자 탭을 선택하여 그룹에 사용자 추가 버튼을 클릭하여 필요한 사용자를 추가하시오.\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#use-groups-for-permissions\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/iam-user-policies.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_025",
    risk: "상",
    name: "사용하지 않는 IAM 사용자가 존재하는지 확인하시오.",
    description:
      "IAM 사용자가 생성된 후 한번도 로그인되거나 비활성화 되어 있는 IAM 사용자가 존재하는지 확인하고 불필요한 IAM 사용자일 경우 삭제해야 합니다. \n\n불필요한 IAM 사용자를 삭제하면 AWS 계정 리소스에 대한 무단 액세스의 위험을 줄이고 IAM 사용자 기반 액세스를 보다 효율적으로 관리할 수 있습니다.",
    inspection:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 검사하고자 하는 IAM 계정을 클릭한다.\n6) 해당 창에서 보안 자격 증명탭을 클릭한다.\n7) 해당 탭에서 액세스 키에 마지막 사용을 확인합니다. 만약 마지막 사용이 'Never'로 되어 있는지 확인하시오.\n8) 위 작업( 4)번 부터 7)번 작업 )을 모든 IAM 계정에 대해 반복하시오.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 삭제하고자 하는 사용자 열에서 좌측 체크박스에 체크를 하시오.\n6) 패널 상단에 위치한 사용자 삭제 버튼을 클릭하여 해당 계정을 삭제하시오",
    reference:
      "https://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-security-audit-guide.html#aws-security-audit-review-users\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/unused-iam-user.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_026",
    risk: "상",
    name: "인라인 정책이 있는 IAM 사용자 혹은 그룹이 존재하는지 확인하시오.",
    description:
      "사용자 지정 정책의 경우 인라인 정책보다는 관리형 정책의 사용을 권장합니다. 이 정책을 사용하면 AWS Management 콘솔의 한 위치에서 모든 관리형 정책을 볼 수 있다는 편리성이 있습니다. 또한 AWS CLI 또는 API 작업을 통해서도 이러한 관리형 정책을 볼 수 있습니다.\n\n또한 관리형 정책을 사용하면 재사용성, 버전 관리, 롤백, 자동 업데이트, 더 큰 정책의 할당에 대한 세분화된 제어와 같은 여러 이점을 제공할 수 있습니다.",
    inspection:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘그룹'을 클릭하시오\n5) 요약 페이지에서 권한을클릭하시오.\n6) 해당 탭에서 인라인 정책에 정책이 존재하는지 확인하시오.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘그룹\"을 클릭하시오.\n5) 인라인 정책이 존재하는 그룹을 선택하시오.\n6) 권한 탭을 클릭하시오.\n7) 모든 인라인 정책으로 선택한 후 인라인 정책보기를 통해 모든 정책을 복사하여 저장해 두시오. 그 다음 모든 정책을 삭제 후 그룹에 추가하여 설정합니다.\n8) 좌측 나비게이션에서 정책을 클릭하시오.\n9) 정책 생성 버튼을 클릭하여 고유 정책을 생성하시오.\n10) 7)번에서 저장해 두었던 정책들을 이용하여 정책을 생성하시오.\n11) 다시 좌측 '그룹'을 클릭하여 9)번에서 생성한 고유 정책을 기존 인라인 정책이 있는 그룹 혹은 사용자에 적용하시오.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#best-practice-managed-vs-inline\nhttps://aws.amazon.com/ko/blogs/security/an-easier-way-to-manage-your-policies/\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/iam-group-with-inline-policies.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "IAM_027",
    risk: "상",
    name: "사용하지 않는 IAM 그룹이 존재하는지 확인하시오.",
    description:
      "AWS 계정 내의 모든 IAM 그룹이 현재 사용되고 있는지 확인해야 합니다. 만약 하나 이상의 IAM 사용자와 연결되어 있지 않다면 사용되고 있지 않다고 판단할 수 있습니다.\n\n사용하지 않는 IAM 그룹이 존재한다면 무단 IAM 사용자가 연결되어 해당 IAM 그룹에 부여되어 있는 권한을 이용해 기존에 권한이 없던 AWS 계정 리소스에 액세스할 수 있는 위험이 존재합니다.",
    inspection:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘그룹'을 클릭하시오\n5) 요약 페이지에서 '사용자'를 확인하시오.\n6) 사용자 패널에서 그룹에 연결된 IAM 사용자들이 있는지 확인하시오. 만약 현재 연견된 IAM 사용자가 없는 경우 AWS 콘솔에 다음과 같은 메시지를 호출 합니다'현재 그룹에 연결된 사용자가 없습니다.' \n ",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘그룹'을 클릭하시오\n5) 삭제하고자 하는 그룹의 체크박스에 그룹에 체크를 하시오.\n6) 그 다음 상단에 위치한 그룹 작업탭을 클릭 한 뒤 그룹 삭제 버튼을 눌러 그룹을 삭제하시오.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-security-audit-guide.html#aws-security-audit-groups\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/unused-iam-group.html",
    provider: "AWS",
  },
  {
    classification: "권한 관리",
    index: "IAM_028",
    risk: "상",
    name: "IAM 정책을 수정/삭제할 수 있는 비인가된 IAM 사용자가 존재하는지 확인하시오.",
    description:
      '비인가된 IAM 사용자가 IAM 정책을 편집하도록 허용하면 심각한 보안 위반이 발생할 수 있습니다. AWS 계정 내에서 IAM 정책을 편집하기 위한 무단 요청을 방지하기 위해서 신뢰할 수 있는 IAM 사용자에게만 이러한 IAM 정책 편집 권한을 부여해야 합니다.\n\nIAM 정책 편집에 필요한 권한은 아래와 같습니다.\n1. "iam:CreatePolicy"\n2. "iam:CreatePolicyVersion"\n3. "iam:DeleteGroupPolicy"\n4. "iam:DeletePolicy"\n5. "iam:DeleteRolePolicy"\n6. "iam:DeleteUserPolicy"\n7. "iam:DetachGroupPolicy"\n8. "iam:DetachRolePolicy"\n9. "iam:DetachUserPolicy"\n10. "iam:PutGroupPolicy"\n11. "iam:PutRolePolicy"\n12. "iam:PutUserPolicy"\n13. "iam:UpdateAssumeRolePolicy"',
    inspection:
      "\n  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 검사하고자 하는 IAM 계정을 클릭한다.\n6) 해당 창에서 권한 탭을 확인한다.\n7) 해당 탭에서 'Permissions policies'를 확인한다.\n8) 부여되어 있는 모든 정책에 대해 Json 파일을 확인한다.\n    - \"iam:*\" 와 같은지 확인하시오.\n ",
    action:
      "..\n  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘사용자’를 클릭한다.\n5) 검사하고자 하는 IAM 계정을 클릭한다.\n6) 해당 창에서 권한 탭을 확인한다.\n7) 해당 탭에서 'Permissions policies'를 확인한다.\n8) 부여되어 있는 모든 정책에 대해 Json 파일을 확인한다.\n    - \"iam:*\" 와 같은지 확인하시오.\n",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/IAM/edit-iam-policy-permission.html",
    provider: "AWS",
  },
  {
    classification: "권한 관리",
    index: "IAM_029",
    risk: "상",
    name: "AWSCloudTrail_FullAccess 정책이 한 개 이상의 IAM Entity에 부여되어 있는지 확인하시오.",
    description:
      "AWSCloudTrail_FullAccess 정책이 부여되어 있는 IAM 사용자 및 역할은 자신의 AWS 계정에서 가장 민감하고 중요한 CloudTrail을 이용한 감사 기능을 비활성화 하거나 재구성 할 수 있습니다.\r\n\r\n이 정책은 AWS 계정의 IAM 사용자 및 역할에 광범위하게 적용하거나 공유하기 위한 것이 아니기 때문에 이 정책의 적용을 최대한 적은 수의 개인으로 제한해야 합니다. AWS 계정의 관리자 역할을 담당할 것으로 예상되는 사람에게만 이 정책을 부여해야 합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/iam/ 에서 IAM 콘솔을 엽니다.\r\n2. 왼쪽 메뉴에서 '정책'을 선택합니다.\r\n3. 정책 필터에 'AWSCloudTrail_FullAccess'를 입력합니다.\r\n4. 해당 정책의 이름을 선택합니다.\r\n5. '정책 사용' 탭을 선택합니다.\r\n6. 연결되어 있는 IAM 개체의 목록을 확인합니다.\r\n7. 불필요한 사용자에게 과도하게 권한을 부여한 IAM 개체가 존재하는지 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/iam/ 에서 IAM 콘솔을 엽니다.\r\n2. 왼쪽 메뉴에서 '정책'을 선택합니다.\r\n3. 정책 필터에 'AWSCloudTrail_FullAccess'를 입력합니다.\r\n4. 해당 정책의 이름을 선택합니다.\r\n5. '정책 사용' 탭을 선택합니다.\r\n6. 연결되어 있는 IAM 개체의 목록을 확인합니다.\r\n7. 연결되어 있는 IAM 개체의 목록에서 정책을 분리하고 싶은 이름을 선택합니다.\r\n8. '권한' 탭을 선택합니다.\r\n9. AWSCloudTrail_FullAccess의 우측 '정책 분리' 버튼을 선택합니다.\r\n10. AWSCloudTrail_FullAccess 정책이 부여된 IAM 개체를 최소화 하기 위해 위 과정을 반복합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/best-practices-security.html ",
    provider: "AWS",
  },
  {
    classification: "권한 관리",
    index: "IAM_030",
    risk: "상",
    name: '모든 Action("*")에 대해서 허용하는 IAM 역할의 정책 혹은 관리형 정책이 존재하는지 확인하시오.',
    description:
      "Action 혹은 Resource가 *인 허용 정책이 존재하는지 확인해야 합니다. IAM 역할에 필요한 작업 및 리소스에만 액세스 할 수 있도록 권한을 부여하는 것이 좋습니다.\n\nIAM 정책을 만들 때 최소 권한 부여의 표준 보안 조건을 따르거나, 작업 수행에 필요한 최소한의 권한만 부여해야 합니다. IAM 사용자(역할)가 수행해야 하는 작업을 파악한 후 사용자 혹은 역할이 해당 작업을 수행하는데 반드시 필요한 권한만 부여해야 합니다.\n\n너무 많은 권한을 부여된 정책을 생성하는 것보다 최소 권한만 부여한 정책을 생성한 후 필요에 따라 추가적인 권한을 부여하는 것이 안전합니다. 사용자가 수행해야 하는 최소 권한만을 부여하는게 아니라 전체 권한을 부여하게되면 AWS 계정의 리소스가 잠재적으로 원하지 않은 액세스에 노출될 수 있습니다.",
    inspection: "",
    action: "",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#grant-least-privilege\nhttps://docs.aws.amazon.com/ko_kr/general/latest/gr/aws-security-audit-guide.html#aws-security-audit-review-policy-tips\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/iam-role-policy-too-permissive.html",
    provider: "AWS",
  },
  {
    classification: "권한 관리",
    index: "IAM_031",
    risk: "상",
    name: 'Effect:"Allow"와 "NotAction"을 함께 사용하는 IAM 정책이 존재하는지 확인하시오.',
    description:
      "Effect는 Allow지만 Action 목록이 설정되어 있지 않은 의미없는 IAM 정책이 존재하는지 확인해야 합니다. 이렇게 의미없는 IAM 정책들이 많아질 수록 관리형 복잡해질 수 있습니다.",
    inspection:
      '  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘정책\'을 클릭하시오\n5) 정책 리스트에서 정책필터를 클릭한 후, 고객 관리형을 클릭하시오.\n6) 리스트에 나온 고객 관리형 정책들을 클릭하시오.\n7) 요약 페이지에서 권한에 보여지는 {}JSON 형식의 내용을 확인하시오.\n8) 정책내용에 "Effect" : "Allow"인지, 그리고 해당 줄 아래 "NotAction"이 함께 사용하는지 확인하시오\n',
    action:
      '  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 ‘정책\'을 클릭하시오\n5) 정책 리스트에서 정책필터를 클릭한 후, 고객 관리형을 클릭하시오.\n6) Audit을 통해 함께 사용하는 IAM 정책을 클릭하시오.\n7) 권한에서 정책 편집 버튼을 클릭하여 정책을 편집하시오.\n8) 정책에서  "Effect" : "Allow" 해당 줄 아래의 "NotAction"을 삭제하시오.\n9) 정책 설정 변경을 저장한 후 확인하시오. \n',
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/IAM/policy-with-effect-allow-and-not-action.html",
    provider: "AWS",
  },
  {
    classification: "권한 관리",
    index: "IAM_032",
    risk: "상",
    name: "AWSSupportAccess 정책을 가지는 IAM 역할이 존재하는지 확인하시오.",
    description:
      "IAM 정책별로 액세스 제어에 필요한 최소 권한만 부여함으로써 사건을 관리하기 위한 지원 센터 액세스를 허용하는 IAM 정책이 부여된 IAM 역할을 생성해야 합니다.\n\n사건을 관리하기 위한 지원 센터 액세스를 허용에 필요한 AWSSupportAccess 정책을 IAM 역할에 부여함으로써 최소 권한 원칙을 구현하는 것은 매우 중요합니다.",
    inspection:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 '정책'을 클릭한다.\n5) 정책에서 AWSSupportAccess 정책을 검색한 후 해당 정책을 클릭한다.\n6) 요약 페이지에서 정책 사용을 클릭한 후 연결되어 있는 IAM 역할 들을 확인합니다.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) ‘서비스’를 클릭한다.\n3) ‘IAM’을 클릭한다.\n4) 좌측 '정책'을 클릭한다.\n5) 정책에서 AWSSupportAccess 정책을 검색한 후 해당 정책을 클릭한다.\n6) 요약 페이지에서 정책 사용을 클릭한 후 연결되어 있는 IAM 역할 들을 전체 선택한다.\n7) 그 후 해당 정책들을 모두 분리버튼을 눌러 분리 시킵니다.\n",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/support-role.html",
    provider: "AWS",
  },
  {
    classification: "권한 관리",
    index: "IAM_033",
    risk: "상",
    name: "보안그룹, NACL, 흐름로그를 생성하고 관리할 수 있는 권한이 과도하게 부여되어있지 않은지 확인하시오.",
    description:
      'IAM 정책을 만들 때 최소 권한 부여의 표준 보안 조언을 따르거나, 작업 수행에 필요한 최소한의 권한만 부여해야 합니다. IAM 사용자 및 역할이 수행해야 하는 작업을 명확히 파악한 후 해당 IAM 개체가 해당 작업만 수행하도록 정책을 작성해야 합니다\n\n따라서, VPC의 보안그룹, NACL, 흐름 로그를 생성하고 관리할 수 있는 권한이 과도하게 많은 IAM 개체에 부여되어 있지 않도록 해야합니다."  ',
    inspection:
      ' "1. https://console.aws.amazon.com/iam에서 IAM 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 \'정책\'을 선택합니다.\n3. 정책 필터에서 \'권한에 사용됨\' 체크박스를 체크합니다.\n4. 정책 필터에서 \'고객 관리형\' 체크박스를 체크합니다.\n5. 정책목록의 \'정책 이름\'을 선택합니다.\n6. \'권한\'탭에서 ""Effect""가 Allow이고, ""Action""이 [""ec2:CreateSecurityGroup"", ""ec2:DeleteSecurityGroup"", ""ec2:AuthorizeSecurityGroupIngress"", ""ec2:AuthorizeSecurityGroupEgress"", ""ec2:RevokeSecurityGroupIngress"", ""ec2:RevokeSecurityGroupEgress"", ""ec2:CreateFlowLogs"", ""ec2:DeleteFlowlogs"", ""ec2:CreateNetworkAcl"", ""ec2:DeleteNetworkAcl"", ""ec2:CreateNetworkAclEntry"", ""ec2:DeleteNetworkAclEntry""]인 정책이 존재하는지 확인합니다.\n7. 존재한다면 \'정책 사용\' 탭을 선택합니다.\n8. 해당 정책이 과도한 IAM 개체에 연결되어 있지 않은지 확인합니다.\n9. 모든 정책에 대해서 반복합니다.',
    action:
      '1. https://console.aws.amazon.com/iam에서 IAM 콘솔을 엽니다.\n2. 왼쪽 메뉴에서 \'정책\'을 선택합니다.\n3. 정책 필터에서 \'권한에 사용됨\' 체크박스를 체크합니다.\n4. 정책목록의 \'정책 이름\'을 선택합니다.\n5. \'권한\'탭에서 ""Effect""가 Allow이고, ""Action""이 [""ec2:CreateSecurityGroup"", ""ec2:DeleteSecurityGroup"", ""ec2:AuthorizeSecurityGroupIngress"", ""ec2:AuthorizeSecurityGroupEgress"", ""ec2:RevokeSecurityGroupIngress"", ""ec2:RevokeSecurityGroupEgress"", ""ec2:CreateFlowLogs"", ""ec2:DeleteFlowlogs"", ""ec2:CreateNetworkAcl"", ""ec2:DeleteNetworkAcl"", ""ec2:CreateNetworkAclEntry"", ""ec2:DeleteNetworkAclEntry""]인 정책이 존재하는지 확인합니다.\n6. 존재한다면 \'정책 사용\' 탭을 선택합니다.\n7. 해당 정책을 사용하고 있는 IAM 개체의 목록을 확인하고 필요하다면 선택 후 \'분리\' 버튼을 선택합니다.\n8. 모든 정책에 대해서 반복합니다."  ',
    reference:
      "https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/VPC_Security.html\nhttps://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#grant-least-privilege",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "IAM_034",
    risk: "상",
    name: "만료되거나 만료일이 7일 이내인 SSL/TLS 인증서가 존재하는지 확인하시오.",
    description: "",
    inspection:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) 서비스 탭에서 'EC2'를 클릭하시오.\n3) 좌측 네비게이션에서 로드 밸런싱에 로드 밸런서를 클릭하시오.\n4) 나와 있는 ELB(Elastic Load Balancer)의 만료 기간을 확인하여 7일 이내의 SSL/TLS 인증서가 있는지 확인하시오.\n",
    action:
      "  - AWS Console\n1) IAM 전체 사용자를 볼 수 있는 IAM 계정을 이용하여 콘솔에 로그인한다.\n2) 서비스 탭에서 'EC2'를 클릭하시오.\n3) 좌측 네비게이션에서 로드 밸런싱에 로드 밸런서클 릭하시오.\n4) ELB중 만료될 ELB를 클릭하시오\n5) SSL인증서의 리스터 탭을 클릭한 후 변경을 클릭하시오.\n6) 인증서 정보를 수정하시오",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/IAM/ssl-tls-certificate-expiry-7-days.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "IAM_035",
    risk: "상",
    name: "2014년 4월 1일 이전에 업로드된 SSL/TLS 인증서가 없는지 확인하시오.",
    description:
      "AWS IAM에서 관리하는 모든 SSL/TLS 서버 인증서가 Heartbleed 버그에 의해서 손상되지 않았는지 확인해야 합니다. \n\nHeartbleed 버그란 2014년 4월에 발견된 오픈소스 암호화 라이브러리인 OpenSSL의 소프트웨어 버그입니다. 이 공격으로 개인 키 및 세션 쿠키 및 암호를 탈취 당할 위협이 존재합니다. 또한 공격자가 SSL/TLS 암호화 통신을 도청함에 따라서 서비스 및 사용자로부터 민감정보 혹은 기밀정보를 훔칠 수 있습니다.\n\n2014년 3월 21일 구글의 보도 모엘러와 애덤 랭글리는 이 버그를 수정한 패치를 기록했고, 이어서 웹사이트 성능 및 보안 기업인 클라우드플레어에서 2014년 3월 31일 시스템 상의 결점을 수정했습니다. 따라서 AWS IAM에서 관리하는 모든 SSL/TLS 서버 인증서는 해당 패치 이후인 2014년 4월 1일 이후에 배포된 것을 사용해야 합니다.",
    inspection: "",
    action: "",
    reference:
      "https://ko.wikipedia.org/wiki/%ED%95%98%ED%8A%B8%EB%B8%94%EB%A6%AC%EB%93%9C\nhttps://heartbleed.com/\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/certificate-pre-heartbleed.html",
    provider: "AWS",
  },
  {
    classification: "계정 관리",
    index: "CloudWatch_001",
    risk: "상",
    name: "AWS 계정 Root 사용자의 사용을 모니터링하고 있는지 확인하시오.",
    description:
      '액세스 키를 사용하여 프로그래밍 방식으로 AWS에 요청을 보낼 수 있습니다. AWS 계정 Root 사용자의 액세스 키는 결제 정보를 포함하여 모든 AWS 서비스의 전체 리소스에 대해 액세스 권한을 가집니다. AWS 계정 Root 사용자에 부여된 권한은 줄일 수 없습니다. 그렇기 때문에 AWS 계정의 Root 사용자는 사용하지 않는 것이 좋습니다.\n\nAWS 계정 Root 사용자의 로그인 및 사용을 모니터링하면 해당 Root 사용자의 사용에 대한 가시성이 제공됩니다.\n\n따라서 CloudWatch의 Metric Filter를 생성해 AWS 계정 Root 사용자의 로그인 및 사용을 모니터링하고, 이러한 상황에 트리거되는 CloudWatch Alrarm을 생성해야 합니다.\n\n이렇게 AWS 계정 Root 사용자의 로그인 및 사용을 모니터링 하기 위한 Metric Filter는 다음과 같습니다.\n{ $.userIdentity.type = "Root" && $.userIdentity.invokedBy NOT EXISTS && $.eventType != "AwsServiceEvent" }',
    inspection:
      '1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 : { ($.eventName = ConsoleLogin) && ($.errorMessage = "Failed authentication") }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n',
    action:
      '1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 \'로그 그룹 생성\'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { $.userIdentity.type = "Root" && $.userIdentity.invokedBy NOT EXISTS && $.eventType != "AwsServiceEvent" }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n9) 필터 이름 입력 칸에 알맞은 필터 이름을 입력하시오 \n - ConsoleSignInWithoutMfa\n10) 지표 세부 정보에서는 아래와 같이 입력하시오.\n - 지표 네임스페이스 : CloudTrailMetrics\n - 지표 이름 : ConsoleSigninFailureCount  \n - 지표 값 : 1이라 입력하시오.(만약 해당 지표가 발생하면 수치를 1씩 올릴 것 입니다.)\n',
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#create-iam-users\nhttps://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/id_root-user.html\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/root-user-activity.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "CloudWatch_002",
    risk: "상",
    name: "인증되지 않은 API 호출을 모니터링하고 있는지 확인하시오.",
    description:
      '인증되지 않는 사용자가 무단으로 API 호출하는 것을 모니터링하면 응용 프로그램 오류를 찾는 것에 도움이되고, 악의적인 활동을 탐지하는데 걸리는 시간을 줄일 수 있습니다.\n\n따라서 CloudWatch의 Metric Filter를 생성해 인증되지 않은 사용자의 무단 API 호출을 모니터링하고, 이러한 상황에 트리거되는 CloudWatch Alram을 생성해야 합니다.\n\n이러한 인증되지 않은 사용자의 무장 API 호출을 탐지하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.errorCode = "*UnauthorizedOperation") || ($.errorCode = "AccessDenied*") }',
    inspection:
      '1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 : {($.errorCode = "*UnauthorizedOperation") || ($.errorCode = "AccessDenied*")}\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n',
    action:
      '1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 \'로그 그룹 생성\'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { ($.errorCode = "*UnauthorizedOperation") || ($.errorCode = "AccessDenied*") }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n9) 필터 이름 입력 칸에 알맞은 필터 이름을 입력하시오\n - UnauthorizedOperation\n10) 지표 세부 정보에서는 아래와 같이 입력하시오.\n - 지표 네임스페이스 : CloudTrailMetrics\n - 지표 이름 : AuthorizationFailureCount\n - 지표 값 : 1이라 입력하시오.(만약 해당 지표가 발생하면 수치를 1씩 올릴 것 입니다.)\n',
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/authorization-failures-alarm.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "CloudWatch_003",
    risk: "상",
    name: "AWS Management Console에 MFA 인증 없이 로그인하는 것을 모니터링하고 있는지 확인하시오.",
    description:
      'AWS Management Console에 MFA 인증 없이 Single Factor 로그인하는 것을 모니터링하면 MFA를 통한 보호계층을 추가하지 않은 계정에 대한 가시성을 높일 수 있습니다. AWS 보안 모범 사례에 따르면 모든 Root 사용자 및 IAM 사용자는 MFA를 요구하는 것을 권장하고 있습니다.\n\n따라서 CloudWatch의 Metric Filter를 생성해 AWS Management Console에 MFA 인증 없이 로그인하는 것을 모니터링하고, 이러한 상황에 트리거되는 CloudWatch Alrarm을 생성해야 합니다.\n\n이렇게 AWS Management Console에 MFA 인증 없이 로그인하는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventName = "ConsoleLogin") && ($.additionalEventData.MFAUsed != "Yes") }',
    inspection:
      '1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 : {($.errorCode = "*UnauthorizedOperation") || ($.errorCode = "AccessDenied*")}\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n',
    action:
      '1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 \'로그 그룹 생성\'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { $.eventName = "ConsoleLogin" && $.additionalEventData.MFAUsed = "No" }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n9) 필터 이름 입력 칸에 알맞은 필터 이름을 입력하시오 \n - ConsoleSignInWithoutMfa\n10) 지표 세부 정보에서는 아래와 같이 입력하시오.\n - 지표 네임스페이스 : CloudTrailMetrics\n - 지표 이름 : ConsoleSignInWithoutMfaCount \n - 지표 값 : 1이라 입력하시오.(만약 해당 지표가 발생하면 수치를 1씩 올릴 것 입니다.)\n',
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#enable-mfa-for-privileged-users\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/console-sign-in-without-mfa.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "CloudWatch_004",
    risk: "상",
    name: "AWS Management Console에 인증실패를 모니터링하고 있는지 확인하시오.",
    description:
      'AWS Management Console에 대한 인증실패를 모니터링하면 자격증명을 무차별 대입 공격과 같은 무차별적으로 적용하려는 시도를 탐지하는데 걸리는 시간을 줄일 수 있습니다.\n\n따라서 CloudWatch의 Metric Filter를 생성해 AWS Management Console에 대한 인증실패를 모니터링하고, AWS Management Console에 로그인 실패가 3회 이상 반복되었을 때 트리거 되는 CloudWatch Alrarm을 생성해야 합니다.\n\n이렇게 AWS Management Console에 대한 인증실패를 모니터링 하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventName = ConsoleLogin) && ($.errorMessage = "Failed authentication") }',
    inspection:
      '1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 : {($.eventName = ConsoleLogin) && ($.errorMessage = "Failed authentication") }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n',
    action:
      '1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 \'로그 그룹 생성\'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { $.eventName = "ConsoleLogin" && $.additionalEventData.MFAUsed = "No" }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n9) 필터 이름 입력 칸에 알맞은 필터 이름을 입력하시오 \n - ConsoleSignInWithoutMfa\n10) 지표 세부 정보에서는 아래와 같이 입력하시오.\n - 지표 네임스페이스 : CloudTrailMetrics\n - 지표 이름 : ConsoleSigninFailureCount  \n - 지표 값 : 1이라 입력하시오.(만약 해당 지표가 발생하면 수치를 1씩 올릴 것 입니다.)\n',
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html#cloudwatch-alarms-for-cloudtrail-signin\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/console-sign-in-failures-alarm.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudWatch_005",
    risk: "상",
    name: "AWS 계정에 IAM 구성이 변경되는 것을 모니터링하고 있는지 확인하시오.",
    description:
      "AWS IAM은 AWS 서비스 및 리소스에 대한 액세스를 안전하게 제어하는데 도움이되는 웹 서비스입니다. AWS IAM을 사용하면 IAM 사용자, 그룹, 역할, 보안 자격증명, 권한 등을 중앙에서 관리할 수 있습니다.\n\nIAM은 AWS 계정 내의 리소스 및 서비스에 대한 액세스 제어를 관리하는 중요한 서비스이기 때문에 IAM 구성이 변경되는 것을 모니터링하는 것은 AWS 클라우드 환경을 안전하게 유지하는데 중요합니다. 보안 모범 사례로써 IAM 서비스 수준에서 이루어진 모든 구성 변경사항을 알고 있어야 합니다. IAM 구성이 변경되는 것을 모니터링하면 심각한 보안 위반, 데이터 유출, 데이터 손실 또는 예상치 못한 요금이 발생하는 것을 방지할 수 있습니다.\n\n따라서 IAM 구성이 변경되는 것을 모니터링하고, 이러한 상황에 트리거되는 CloudWatch Alarm을 생성해야 합니다.\n\n이렇게 IAM 구성이 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventName = AddUserToGroup) || ($.eventName = AttachGroupPolicy) || ($.eventName = AttachRolePolicy) || ($.eventName = AttachUserPolicy) || ($.eventName = ChangePassword) || ($.eventName = CreateAccessKey) || ($.eventName = CreateAccountAlias) || ($.eventName = CreateGroup) || ($.eventName = CreateLoginProfile) || ($.eventName = CreateOpenIDConnectProvider) || ($.eventName = CreatePolicy) || ($.eventName = CreatePolicyVersion) || ($.eventName = CreateRole) || ($.eventName = CreateSAMLProvider) || ($.eventName = CreateServiceLinkedRole) || ($.eventName = CreateServiceSpecificCredential) || ($.eventName = CreateUser) || ($.eventName = CreateVirtualMFADevice) || ($.eventName = DeactivateMFADevice) || ($.eventName = DeleteAccessKey) || ($.eventName = DeleteAccountAlias) || ($.eventName = DeleteAccountPasswordPolicy) || ($.eventName = DeleteGroup) || ($.eventName = DeleteGroupPolicy) || ($.eventName = DeleteLoginProfile) || ($.eventName = DeleteOpenIDConnectProvider) || ($.eventName = DeletePolicy) || ($.eventName = DeletePolicyVersion) || ($.eventName = DeleteRole) || ($.eventName = DeleteRolePermissionsBoundary) || ($.eventName = DeleteRolePolicy) || ($.eventName = DeleteSAMLProvider) || ($.eventName = DeleteServerCertificate) || ($.eventName = DeleteServiceLinkedRole) || ($.eventName = DeleteServiceSpecificCredential) || ($.eventName = DeleteSigningCertificate) || ($.eventName = DeleteSSHPublicKey) || ($.eventName = DeleteUser) || ($.eventName = DeleteUserPermissionsBoundary) || ($.eventName = DeleteUserPolicy) || ($.eventName = DeleteVirtualMFADevice) || ($.eventName = DetachGroupPolicy) || ($.eventName = DetachRolePolicy) || ($.eventName = DetachUserPolicy) || ($.eventName = EnableMFADevice) || ($.eventName = PutGroupPolicy) || ($.eventName = PutRolePermissionsBoundary) || ($.eventName = PutRolePolicy) || ($.eventName = PutUserPermissionsBoundary) || ($.eventName = PutUserPolicy) || ($.eventName = RemoveClientIDFromOpenIDConnectProvider) || ($.eventName = RemoveUserFromGroup) || ($.eventName = ResetServiceSpecificCredential) || ($.eventName = SetDefaultPolicyVersion) || ($.eventName = UpdateAccessKey) || ($.eventName = UpdateAccountPasswordPolicy) || ($.eventName = UpdateAssumeRolePolicy) || ($.eventName = UpdateGroup) || ($.eventName = UpdateLoginProfile) || ($.eventName = UpdateOpenIDConnectProviderThumbprint) || ($.eventName = UpdateRole) || ($.eventName = UpdateSAMLProvider) || ($.eventName = UpdateServerCertificate) || ($.eventName = UpdateServiceSpecificCredential) || ($.eventName = UpdateSigningCertificate) || ($.eventName = UpdateSSHPublicKey) || ($.eventName = UpdateUser) || ($.eventName = UploadServerCertificate) || ($.eventName = UploadSigningCertificate) || ($.eventName = UploadSSHPublicKey) }\n\n적어도 IAM 정책이 변경되는 것은 모니터링해야 합니다.\n\n이렇게 IAM 정책이 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventName = DeleteGroupPolicy) || ($.eventName = DeleteRolePolicy) || ($.eventName = DeleteUserPolicy) || ($.eventName = PutGroupPolicy) || ($.eventName = PutRolePolicy) || ($.eventName = PutUserPolicy) || ($.eventName = CreatePolicy) || ($.eventName = DeletePolicy) || ($.eventName = CreatePolicyVersion) || ($.eventName = DeletePolicyVersion) || ($.eventName = AttachRolePolicy) || ($.eventName = DetachRolePolicy) || ($.eventName = AttachUserPolicy) || ($.eventName = DetachUserPolicy) || ($.eventName = AttachGroupPolicy) || ($.eventName = DetachGroupPolicy) }",
    inspection:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 : { ($.eventName = AddUserToGroup) || ($.eventName = AttachGroupPolicy) || ($.eventName = AttachRolePolicy) || ($.eventName = AttachUserPolicy) || ($.eventName = ChangePassword) || ($.eventName = CreateAccessKey) || ($.eventName = CreateAccountAlias) || ($.eventName = CreateGroup) || ($.eventName = CreateLoginProfile) || ($.eventName = CreateOpenIDConnectProvider) || ($.eventName = CreatePolicy) || ($.eventName = CreatePolicyVersion) || ($.eventName = CreateRole) || ($.eventName = CreateSAMLProvider) || ($.eventName = CreateServiceLinkedRole) || ($.eventName = CreateServiceSpecificCredential) || ($.eventName = CreateUser) || ($.eventName = CreateVirtualMFADevice) || ($.eventName = DeactivateMFADevice) || ($.eventName = DeleteAccessKey) || ($.eventName = DeleteAccountAlias) || ($.eventName = DeleteAccountPasswordPolicy) || ($.eventName = DeleteGroup) || ($.eventName = DeleteGroupPolicy) || ($.eventName = DeleteLoginProfile) || ($.eventName = DeleteOpenIDConnectProvider) || ($.eventName = DeletePolicy) || ($.eventName = DeletePolicyVersion) || ($.eventName = DeleteRole) || ($.eventName = DeleteRolePermissionsBoundary) || ($.eventName = DeleteRolePolicy) || ($.eventName = DeleteSAMLProvider) || ($.eventName = DeleteServerCertificate) || ($.eventName = DeleteServiceLinkedRole) || ($.eventName = DeleteServiceSpecificCredential) || ($.eventName = DeleteSigningCertificate) || ($.eventName = DeleteSSHPublicKey) || ($.eventName = DeleteUser) || ($.eventName = DeleteUserPermissionsBoundary) || ($.eventName = DeleteUserPolicy) || ($.eventName = DeleteVirtualMFADevice) || ($.eventName = DetachGroupPolicy) || ($.eventName = DetachRolePolicy) || ($.eventName = DetachUserPolicy) || ($.eventName = EnableMFADevice) || ($.eventName = PutGroupPolicy) || ($.eventName = PutRolePermissionsBoundary) || ($.eventName = PutRolePolicy) || ($.eventName = PutUserPermissionsBoundary) || ($.eventName = PutUserPolicy) || ($.eventName = RemoveClientIDFromOpenIDConnectProvider) || ($.eventName = RemoveUserFromGroup) || ($.eventName = ResetServiceSpecificCredential) || ($.eventName = SetDefaultPolicyVersion) || ($.eventName = UpdateAccessKey) || ($.eventName = UpdateAccountPasswordPolicy) || ($.eventName = UpdateAssumeRolePolicy) || ($.eventName = UpdateGroup) || ($.eventName = UpdateLoginProfile) || ($.eventName = UpdateOpenIDConnectProviderThumbprint) || ($.eventName = UpdateRole) || ($.eventName = UpdateSAMLProvider) || ($.eventName = UpdateServerCertificate) || ($.eventName = UpdateServiceSpecificCredential) || ($.eventName = UpdateSigningCertificate) || ($.eventName = UpdateSSHPublicKey) || ($.eventName = UpdateUser) || ($.eventName = UploadServerCertificate) || ($.eventName = UploadSigningCertificate) || ($.eventName = UploadSSHPublicKey) }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n",
    action:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 '로그 그룹 생성'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { ($.eventName = AddUserToGroup) || ($.eventName = AttachGroupPolicy) || ($.eventName = AttachRolePolicy) || ($.eventName = AttachUserPolicy) || ($.eventName = ChangePassword) || ($.eventName = CreateAccessKey) || ($.eventName = CreateAccountAlias) || ($.eventName = CreateGroup) || ($.eventName = CreateLoginProfile) || ($.eventName = CreateOpenIDConnectProvider) || ($.eventName = CreatePolicy) || ($.eventName = CreatePolicyVersion) || ($.eventName = CreateRole) || ($.eventName = CreateSAMLProvider) || ($.eventName = CreateServiceLinkedRole) || ($.eventName = CreateServiceSpecificCredential) || ($.eventName = CreateUser) || ($.eventName = CreateVirtualMFADevice) || ($.eventName = DeactivateMFADevice) || ($.eventName = DeleteAccessKey) || ($.eventName = DeleteAccountAlias) || ($.eventName = DeleteAccountPasswordPolicy) || ($.eventName = DeleteGroup) || ($.eventName = DeleteGroupPolicy) || ($.eventName = DeleteLoginProfile) || ($.eventName = DeleteOpenIDConnectProvider) || ($.eventName = DeletePolicy) || ($.eventName = DeletePolicyVersion) || ($.eventName = DeleteRole) || ($.eventName = DeleteRolePermissionsBoundary) || ($.eventName = DeleteRolePolicy) || ($.eventName = DeleteSAMLProvider) || ($.eventName = DeleteServerCertificate) || ($.eventName = DeleteServiceLinkedRole) || ($.eventName = DeleteServiceSpecificCredential) || ($.eventName = DeleteSigningCertificate) || ($.eventName = DeleteSSHPublicKey) || ($.eventName = DeleteUser) || ($.eventName = DeleteUserPermissionsBoundary) || ($.eventName = DeleteUserPolicy) || ($.eventName = DeleteVirtualMFADevice) || ($.eventName = DetachGroupPolicy) || ($.eventName = DetachRolePolicy) || ($.eventName = DetachUserPolicy) || ($.eventName = EnableMFADevice) || ($.eventName = PutGroupPolicy) || ($.eventName = PutRolePermissionsBoundary) || ($.eventName = PutRolePolicy) || ($.eventName = PutUserPermissionsBoundary) || ($.eventName = PutUserPolicy) || ($.eventName = RemoveClientIDFromOpenIDConnectProvider) || ($.eventName = RemoveUserFromGroup) || ($.eventName = ResetServiceSpecificCredential) || ($.eventName = SetDefaultPolicyVersion) || ($.eventName = UpdateAccessKey) || ($.eventName = UpdateAccountPasswordPolicy) || ($.eventName = UpdateAssumeRolePolicy) || ($.eventName = UpdateGroup) || ($.eventName = UpdateLoginProfile) || ($.eventName = UpdateOpenIDConnectProviderThumbprint) || ($.eventName = UpdateRole) || ($.eventName = UpdateSAMLProvider) || ($.eventName = UpdateServerCertificate) || ($.eventName = UpdateServiceSpecificCredential) || ($.eventName = UpdateSigningCertificate) || ($.eventName = UpdateSSHPublicKey) || ($.eventName = UpdateUser) || ($.eventName = UploadServerCertificate) || ($.eventName = UploadSigningCertificate) || ($.eventName = UploadSSHPublicKey) }",
    reference:
      "https://docs.aws.amazon.com/ko_kr/IAM/latest/UserGuide/best-practices.html#keep-a-log\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/IAM/configuration-changes.html\r\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/iam-policy-changes-alarm.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudWatch_006",
    risk: "상",
    name: "CloudTrail 설정이 변경되는 것을 모니터링하고 있는지 확인하시오.",
    description:
      "CloudTrail은 AWS 계정의 거버넌스, 규정 준수, 운영 감사 및 위험 감사를 지원하는 서비스입니다. CloudTrail을 통해 AWS 계정의 IAM 사용자 및 역할, AWS 서비스가 수행하는 작업의 이벤트 기록을 모니터링하고 기록합니다.\n\n누가 또는 어떤 조치를 취했는지, 어떤 리소스에 대해 조치를 취했는지, 이벤트가 발생한 시기 및 AWS 계정 내의 모든 활동을 분석하고 대응하는데 도움이되는 기타 세부 정보를 식별할 수 있습니다.\n\n따라서, 이러한 CloudTrail 서비스가 지속적으로 정상적인 역할을 수행하기 위해서는 CloudTrail 수준에서 수행된 모든 구성 변경사항을 모니터링해야 합니다. 또한 CloudTrail 설정이 변경되는 것을 모니터링 함으로써 서비스 구성의 무결성을 유지하고 AWS 사용자가 AWS 계정 내에서 무단 작업을 수행한 후 자신의 트랙으로 덮어 쓰는 것을 방지할 수 있습니다.\n\n따라서 CloudWatch의 Metric Filter를 생성해 CloudTrail 설정이 변경되는 것을 모니터링하고, 이러한 상황에 트리거되는 CloudWatch Alarm을 생성해야 합니다.\n\n이렇게 CloudTrail 설정이 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventName = CreateTrail) || ($.eventName = UpdateTrail) || ($.eventName = DeleteTrail) || ($.eventName = StartLogging) || ($.eventName = StopLogging) }",
    inspection:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 :{ ($.eventName = CreateTrail) || ($.eventName = UpdateTrail) || ($.eventName = DeleteTrail) || ($.eventName = StartLogging) || ($.eventName = StopLogging) }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n",
    action:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 '로그 그룹 생성'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { ($.eventName = CreateTrail) || ($.eventName = UpdateTrail) || ($.eventName = DeleteTrail) || ($.eventName = StartLogging) || ($.eventName = StopLogging) }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n9) 필터 이름 입력 칸에 알맞은 필터 이름을 입력하시오 \n - CloudTrailConfigurationChanges\n10) 지표 세부 정보에서는 아래와 같이 입력하시오.\n - 지표 네임스페이스 : CloudTrailMetrics\n - 지표 이름 : CloudTrailConfigurationChanges \n - 지표 값 : 1이라 입력하시오.(만약 해당 지표가 발생하면 수치를 1씩 올릴 것 입니다.)\n",
    reference:
      "https://aws.amazon.com/ko/blogs/mt/monitor-changes-and-auto-enable-logging-in-aws-cloudtrail/\nhttps://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html#cloudwatch-alarms-for-cloudtrail-cloudtrail-changes\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudTrail/configuration-changes.html\r\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/cloudtrail-changes-alarm.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudWatch_007",
    risk: "상",
    name: "VPC가 변경되는 것을 모니터링하고 있는지 확인하시오.",
    description:
      "Amazon VPC를 Amazon EC2의 네트워크 계층입니다. Amazon VPC를 이용하면 사용자가 정의한 가상 네트워크로 AWS 리소스를 시작할 수 있습니다.\n\nAmazon VPC, VPC 피어링 연결, 클래식 EC2 인스턴스에 대한 VPC 연결 생성, 업데이트 혹은 삭제하기 위한 API 호출을 모니터링해야 합니다. 이렇게 VPC가 변경되는 것을 모니터링하면 무단 네트워크 액세스 또는 기타 보안 위반으로 이어질 수 있는 우발적이거나 의도적인 변경을 방지할 수 있습니다.\n\n따라서 Amazon VPC가 변경되는 것을 모니터링하고, Amazon VPC, VPC 피어링 연결, 클래식 EC2 인스턴스에 대한 VPC 연결 생성, 업데이트 혹은 삭제하기 위한 API 호출시 트리거되는 CloudWatch Alarm을 생성해야 합니다.\n\n이렇게 Amazon VPC가 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventName = CreateVpc) || ($.eventName = DeleteVpc) || ($.eventName = ModifyVpcAttribute) || ($.eventName = AcceptVpcPeeringConnection) || ($.eventName = CreateVpcPeeringConnection) || ($.eventName = DeleteVpcPeeringConnection) || ($.eventName = RejectVpcPeeringConnection) || ($.eventName = AttachClassicLinkVpc) || ($.eventName = DetachClassicLinkVpc) || ($.eventName = DisableVpcClassicLink) || ($.eventName = EnableVpcClassicLink) }",
    inspection:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 :{ ($.eventName = CreateVpc) || ($.eventName = DeleteVpc) || ($.eventName = ModifyVpcAttribute) || ($.eventName = AcceptVpcPeeringConnection) || ($.eventName = CreateVpcPeeringConnection) || ($.eventName = DeleteVpcPeeringConnection) || ($.eventName = RejectVpcPeeringConnection) || ($.eventName = AttachClassicLinkVpc) || ($.eventName = DetachClassicLinkVpc) || ($.eventName = DisableVpcClassicLink) || ($.eventName = EnableVpcClassicLink) }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n",
    action:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 '로그 그룹 생성'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { ($.eventName = CreateVpc) || ($.eventName = DeleteVpc) || ($.eventName = ModifyVpcAttribute) || ($.eventName = AcceptVpcPeeringConnection) || ($.eventName = CreateVpcPeeringConnection) || ($.eventName = DeleteVpcPeeringConnection) || ($.eventName = RejectVpcPeeringConnection) || ($.eventName = AttachClassicLinkVpc) || ($.eventName = DetachClassicLinkVpc) || ($.eventName = DisableVpcClassicLink) || ($.eventName = EnableVpcClassicLink) }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html#cloudwatch-alarms-for-cloudtrail-vpc-changes\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/vpc-changes-alarm.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudWatch_008",
    risk: "상",
    name: "보안 그룹이 변경되는 것을 모니터링하고 있는지 확인하시오.",
    description:
      "보안 그룹은 인스턴스에 대한 인바운드 및 아웃바운드 트래픽을 제어하는 가상 방화벽 역할을 합니다.\n\n보안 그룹을 생성, 업데이트 혹은 삭제하기 위한 API 호출을 모니터링해야 합니다. 보안 그룹이 변경되는 것을 모니터링하면 0.0.0.0/0으로 부터의 액세스 혹은 무단으로 액세스로 이어질 수 있는 의도하지 않은 인바운드 및 아웃바운드 규칙이 생성, 변경되는 것을 방지할 수 있습니다. 이를 통해 AWS 리소스 및 서비스가 의도하지 않게 노출되지 않도록 할 수 있습니다.\n\n따라서 보안 그룹이 변경되는 것을 모니터링 하고, 생성, 업데이트 혹은 삭제하기 위한 API가 호출될 때 트리거되는 CloudWatch Alarm을 생성해야 합니다.\n\n이렇게 보안 그룹이 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventName = AuthorizeSecurityGroupIngress) || ($.eventName = AuthorizeSecurityGroupEgress) || ($.eventName = RevokeSecurityGroupIngress) || ($.eventName = RevokeSecurityGroupEgress) || ($.eventName = CreateSecurityGroup) || ($.eventName = DeleteSecurityGroup) }",
    inspection:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 :{ ($.eventName = AuthorizeSecurityGroupIngress) || ($.eventName = AuthorizeSecurityGroupEgress) || ($.eventName = RevokeSecurityGroupIngress) || ($.eventName = RevokeSecurityGroupEgress) || ($.eventName = CreateSecurityGroup) || ($.eventName = DeleteSecurityGroup) }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n",
    action:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 '로그 그룹 생성'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - {{ ($.eventName = AuthorizeSecurityGroupIngress) || ($.eventName = AuthorizeSecurityGroupEgress) || ($.eventName = RevokeSecurityGroupIngress) || ($.eventName = RevokeSecurityGroupEgress) || ($.eventName = CreateSecurityGroup) || ($.eventName = DeleteSecurityGroup) }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html#cloudwatch-alarms-for-cloudtrail-security-group\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/securitygroup-changes-alarm.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudWatch_009",
    risk: "상",
    name: "NACL(Network Access Control List)가 변경되는 것을 모니터링하고 있는지 확인하시오.",
    description:
      "NACL은 1개 이상의 서브넷 내부와 외부의 트래픽을 제어하기 위한 방화벽 역할을 하는 VPC를 위한 선택적 보안 계층입니다. 보안 그룹과 비슷한 규칙으로 NACL 인바운드 및 아웃바운드 규칙을 설정할 수 있습니다.\n\nNACL을 생성, 업데이트 혹은 삭제하기 위한 API 호출을 모니터링해야 합니다. NACL이 변경되는 것을 모니터링하면 0.0.0.0/0으로 부터의 액세스 혹은 무단으로 액세스로 이어질 수 있는 의도하지 않은 인바운드 및 아웃바운드 규칙이 생성, 변경되는 것을 방지할 수 있습니다. 이를 통해 AWS 리소스 및 서비스가 의도하지 않게 노출되지 않도록 할 수 있습니다.\n\n따라서 NACL이 변경되는 것을 모니터링 하고, 생성, 업데이트 혹은 삭제하기 위한 API가 호출될 때 트리거되는 CloudWatch Alarm을 생성해야 합니다.\n\n이렇게 NACL이 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventName = CreateNetworkAcl) || ($.eventName = CreateNetworkAclEntry) || ($.eventName = DeleteNetworkAcl) || ($.eventName = DeleteNetworkAclEntry) || ($.eventName = ReplaceNetworkAclEntry) || ($.eventName = ReplaceNetworkAclAssociation) }",
    inspection:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 :{ ($.eventName = CreateNetworkAcl) || ($.eventName = CreateNetworkAclEntry) || ($.eventName = DeleteNetworkAcl) || ($.eventName = DeleteNetworkAclEntry) || ($.eventName = ReplaceNetworkAclEntry) || ($.eventName = ReplaceNetworkAclAssociation) }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n",
    action:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 '로그 그룹 생성'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { ($.eventName = CreateNetworkAcl) || ($.eventName = CreateNetworkAclEntry) || ($.eventName = DeleteNetworkAcl) || ($.eventName = DeleteNetworkAclEntry) || ($.eventName = ReplaceNetworkAclEntry) || ($.eventName = ReplaceNetworkAclAssociation) }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html#cloudwatch-alarms-for-cloudtrail-network-acl\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/network-acl-changes-alarm.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudWatch_010",
    risk: "상",
    name: "Route Table이 변경되는 것을 모니터링하고 있는지 확인하시오.",
    description:
      "Route Table에는 서브넷 또는 게이트웨이의 네트워크 트래픽이 전송되는 위치를 결정하는데 사용되는 라우팅 규칙집합이 포함되어 있습니다.\n\nRoute Table을 생성, 교체, 삭제, 연결 해제하기 위한 API 호출을 모니터링해야 합니다. Route Table가 변경되는 것을 모니터링하면 제어되지 않은 네트워크 트래픽으로 이어질 수 있는 우발적이거나 의도적인 변경을 방지할 수 있습니다\n\n따라서 Route Table이 변경되는 것을 모니터링하고, Route Table을 생성, 교체, 삭제, 연결 해제하기 위한 API가 호출될 때 트리거되는 CloudWatch Alarm을 생성해야 합니다.\n\n이렇게 Route Table이 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventName = CreateRoute) || ($.eventName = CreateRouteTable) || ($.eventName = ReplaceRoute) || ($.eventName = ReplaceRouteTableAssociation) || ($.eventName = DeleteRouteTable) || ($.eventName = DeleteRoute) || ($.eventName = DisassociateRouteTable) }",
    inspection:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 :{ ($.eventName = CreateRoute) || ($.eventName = CreateRouteTable) || ($.eventName = ReplaceRoute) || ($.eventName = ReplaceRouteTableAssociation) || ($.eventName = DeleteRouteTable) || ($.eventName = DeleteRoute) || ($.eventName = DisassociateRouteTable) }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n",
    action:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 '로그 그룹 생성'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { ($.eventName = CreateRoute) || ($.eventName = CreateRouteTable) || ($.eventName = ReplaceRoute) || ($.eventName = ReplaceRouteTableAssociation) || ($.eventName = DeleteRouteTable) || ($.eventName = DeleteRoute) || ($.eventName = DisassociateRouteTable) }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n\n",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/route-table-changes-alarm.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudWatch_011",
    risk: "상",
    name: "Network Gateway(Internet Gateway, NAT Gateway 등)가 변경되는 것을 모니터링하고 있는지 확인하시오.",
    description:
      "Network Gateway은 VPC 외부의 대상으로 트래픽을 송/수신 하기 위한 통로입니다. Network Gateway에는 Internet Gateway, Customer Gateway, NAT Gateway등이 존재합니다.\n\nNetwork Gateway를 생성, 업데이트 혹은 삭제하기 위한 API 호출을 모니터링해야 합니다. Network Gateway가 변경되는 것을 모니터링하면 네트워크 액세스, AWS VPC와 인터넷 간의 연결 손실, 사용자 간의 VPN 연결 손실로 이어질 수 있는 예기치 않은 변경을 방지할 수 있습니다. 또한 모든 송/수신 트래픽이 Network Gateway를 통해 VPC 밖으로 전송되는 것을 보장할 수 있습니다.\n\n따라서 Network Gateway가 변경되는 것을 모니터링하고, Custemor Gateway와 Internet Gateway가 생성, 업데이트 혹은 삭제하기 위한 API가 호출될 때 트리거되는 CloudWatch Alarm을 생성해야 합니다.\n\n이렇게 Network Gateway가 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventName = CreateCustomerGateway) || ($.eventName = DeleteCustomerGateway) || ($.eventName = AttachInternetGateway) || ($.eventName = CreateInternetGateway) || ($.eventName = DeleteInternetGateway) || ($.eventName = DetachInternetGateway) }",
    inspection:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 :{ ($.eventName = CreateCustomerGateway) || ($.eventName = DeleteCustomerGateway) || ($.eventName = AttachInternetGateway) || ($.eventName = CreateInternetGateway) || ($.eventName = DeleteInternetGateway) || ($.eventName = DetachInternetGateway) }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n",
    action:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 '로그 그룹 생성'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n -{ ($.eventName = CreateCustomerGateway) || ($.eventName = DeleteCustomerGateway) || ($.eventName = AttachInternetGateway) || ($.eventName = CreateInternetGateway) || ($.eventName = DeleteInternetGateway) || ($.eventName = DetachInternetGateway) }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html#cloudwatch-alarms-for-cloudtrail-gateway-changes\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/internet-gateway-changes-alarm.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudWatch_012",
    risk: "상",
    name: "Amazon EC2 인스턴스의 상태가 변경되는 것을 모니터링하고 있는지 확인하시오.",
    description:
      "Amazon EC2는 클라우드에서 컴퓨팅 파워와 규모를 자유자재로 변경할 수 있는 웹 서비스입니다.\n\nAmazon EC2 인스턴스 상태 변경을 모니터링하면 리소스 가용성에 대한 최신 상태를 유지할 수 있고, Auto Scaling의 수명주기에 대한 통찰력을 얻을 수 있습니다. 또한 다운타임을 완화하고 데이터 손실을 방지할 수 있고, 예상치 못한 요금이 발생하는 것을 방지할 수 있습니다.\n\n따라서 Amazon EC2 인스턴스의 상태가 변경되는 것을 모니터링하고, 상태가 변경될 때 트리거되는 CloudWatch Alarm을 생성해야 합니다.\n\n이렇게 Amazon EC2 인스턴스의 상태가 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventName = RunInstances) || ($.eventName = RebootInstances) || ($.eventName = StartInstances) || ($.eventName = StopInstances) || ($.eventName = TerminateInstances) }",
    inspection:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 :{ ($.eventName = RunInstances) || ($.eventName = RebootInstances) || ($.eventName = StartInstances) || ($.eventName = StopInstances) || ($.eventName = TerminateInstances) }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n",
    action:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 '로그 그룹 생성'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { ($.eventName = RunInstances) || ($.eventName = RebootInstances) || ($.eventName = StartInstances) || ($.eventName = StopInstances) || ($.eventName = TerminateInstances) })) }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html#cloudwatch-alarms-for-cloudtrail-ec2-instance-changes\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/ec2-instance-changes-alarm.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudWatch_013",
    risk: "상",
    name: "Amazon S3 Bucket 구성이 변경되는 것을 모니터링하고 있는지 확인하시오.",
    description:
      "Amazon S3는 인터넷 스토리지 서비스입니다. Amazon S3는 데이터를 Bucket 내에 객체로 저장합니다.\n\nS3 Bucket의 정책, ACL, CORS, 복제 또는 수명주기를 생성, 업데이트 또는 삭제하기 위한 API 호출을 모니터링하는 것이 좋습니다. S3 Bucket과 관련된 구성이 변경되는 것을 모니터링하면 데이터 액세스 혹은 기타 보안 위반으로 이어질 수 있는 우발적이거나 의도적인 변경을 방지할 수 있습니다.\n\n따라서 이러한 S3 Bucket 구성이 변경되는 것을 모니터링하고, 이러한 상황에 트리거되는 CloudWatch Alarm을 생성해야 합니다.\n\n이렇게 S3 Bucket 구성이 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventSource = s3.amazonaws.com) && (($.eventName = PutBucketAcl) || ($.eventName = PutBucketPolicy) || ($.eventName = PutBucketCors) || ($.eventName = PutBucketLifecycle) || ($.eventName = PutBucketReplication) || ($.eventName = DeleteBucketPolicy) || ($.eventName = DeleteBucketCors) || ($.eventName = DeleteBucketLifecycle) || ($.eventName = DeleteBucketReplication)) }",
    inspection:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 :{ ($.eventSource = s3.amazonaws.com) && (($.eventName = PutBucketAcl) || ($.eventName = PutBucketPolicy) || ($.eventName = PutBucketCors) || ($.eventName = PutBucketLifecycle) || ($.eventName = PutBucketReplication) || ($.eventName = DeleteBucketPolicy) || ($.eventName = DeleteBucketCors) || ($.eventName = DeleteBucketLifecycle) || ($.eventName = DeleteBucketReplication)) }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n",
    action:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 '로그 그룹 생성'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { ($.eventSource = s3.amazonaws.com) && (($.eventName = PutBucketAcl) || ($.eventName = PutBucketPolicy) || ($.eventName = PutBucketCors) || ($.eventName = PutBucketLifecycle) || ($.eventName = PutBucketReplication) || ($.eventName = DeleteBucketPolicy) || ($.eventName = DeleteBucketCors) || ($.eventName = DeleteBucketLifecycle) || ($.eventName = DeleteBucketReplication)) }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/awscloudtrail/latest/userguide/cloudwatch-alarms-for-cloudtrail.html#cloudwatch-alarms-for-cloudtrail-s3-bucket-activity\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/s3-bucket-changes-alarm.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudWatch_014",
    risk: "중",
    name: "AWS KMS 구성이 변경되는 것을 모니터링하고 있는지 확인하시오.",
    description:
      "AWS KMS(Key Management Service)는 데이터를 손쉽게 암호화 키를 생성하고 관리해주는 관리형 암호화 서비스입니다. AWS KMS는 AWS 서비스 전반에서 민감한 데이터를 암호화할 수 있는 고가용성 키 저장소와 관리 및 감사 솔루션을 제공합니다. KMS는 다른 AWS 서비스와 통합되어 이러한 서비스에서 저장하고 관리하는 데이터를 보호하는데 사용됩니다.\n\n모니터링은 AWS KMS에서 고객 마스터 키(CMK)의 가용성, 상태 및 사용을 이해하고 AWS 솔루션의 안정성, 가용성 및 성능을 유지하는 것에 있어서 중요한 부분입니다. AWS 솔루션의 모든 부분에서 모니터링을 수행하면 다중 지점 오류가 발생할 경우 디버그하는데 도움이 됩니다.\n\n보안 모범 사례로써 AWS KMS 수준에서 이루어진 모든 구성 변경 사항을 알고 있어야합니다. AWS KMS를 사용하면 암호화한 데이터에 대한 액세스 권한을 더 많이 확보할 수 있습니다. 애플리케이션에서 직접 또는 KMS와 통합된 AWS 서비스를 통해 키 관리 암호화 기능을 사용할 수 있습니다. KMS를 사용하면 고객 마스터 키(CMK)를 사용할 수 있는 사용자를 제어하고 암호화된 클라우드 데이터에 대한 전체 액세스 권한을 얻을 수 있습니다. 따라서 AWS KMS 수준에서 수행되는 모든 구성 변경 모니터링은 암호화된 데이터를 안전하게 유지하는데 필수적입니다.\n\n따라서 AWS KMS 구성이 변경되는 것을 모니터링하고, 이러한 상황에 트리거되는 CloudWatch Alarm을 생성해야 합니다.\n\n이렇게 AWS KMS 구성이 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventSource = kms.amazonaws.com) && (($.eventName = CreateAlias) || ($.eventName = CreateGrant) || ($.eventName = CreateKey) || ($.eventName = EnableKey) || ($.eventName = EnableKeyRotation) || ($.eventName = ImportKeyMaterial) || ($.eventName = PutKeyPolicy) || ($.eventName = RetireGrant) || ($.eventName = RevokeGrant) || ($.eventName = ScheduleKeyDeletion) || ($.eventName = TagResource) || ($.eventName = UntagResource) || ($.eventName = UpdateAlias) || ($.eventName = UpdateKeyDescription) || ($.eventName = DisableKey) || ($.eventName = DisableKeyRotation) || ($.eventName = CancelKeyDeletion) || ($.eventName = DeleteAlias) || ($.eventName = DeleteImportedKeyMaterial)) }\n\n적어도 KMS CMK의 상태를 비활성화 혹은 예약된 삭제로 변경하는 것은 모니터링해야 합니다.\n\n이렇게 KMS CMK의 상태를 비활성화 혹은 예약된 삭제로 변경되는 것을 모니터링 하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventSource = kms.amazonaws.com) && (($.eventName = DisableKey) || ($.eventName = ScheduleKeyDeletion)) }\n\n",
    inspection:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 :{ ($.eventSource = kms.amazonaws.com) && (($.eventName = CreateAlias) || ($.eventName = CreateGrant) || ($.eventName = CreateKey) || ($.eventName = EnableKey) || ($.eventName = EnableKeyRotation) || ($.eventName = ImportKeyMaterial) || ($.eventName = PutKeyPolicy) || ($.eventName = RetireGrant) || ($.eventName = RevokeGrant) || ($.eventName = ScheduleKeyDeletion) || ($.eventName = TagResource) || ($.eventName = UntagResource) || ($.eventName = UpdateAlias) || ($.eventName = UpdateKeyDescription) || ($.eventName = DisableKey) || ($.eventName = DisableKeyRotation) || ($.eventName = CancelKeyDeletion) || ($.eventName = DeleteAlias) || ($.eventName = DeleteImportedKeyMaterial)) }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n",
    action:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 '로그 그룹 생성'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { ($.eventSource = kms.amazonaws.com) && (($.eventName = CreateAlias) || ($.eventName = CreateGrant) || ($.eventName = CreateKey) || ($.eventName = EnableKey) || ($.eventName = EnableKeyRotation) || ($.eventName = ImportKeyMaterial) || ($.eventName = PutKeyPolicy) || ($.eventName = RetireGrant) || ($.eventName = RevokeGrant) || ($.eventName = ScheduleKeyDeletion) || ($.eventName = TagResource) || ($.eventName = UntagResource) || ($.eventName = UpdateAlias) || ($.eventName = UpdateKeyDescription) || ($.eventName = DisableKey) || ($.eventName = DisableKeyRotation) || ($.eventName = CancelKeyDeletion) || ($.eventName = DeleteAlias) || ($.eventName = DeleteImportedKeyMaterial)) }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/kms/latest/developerguide/monitoring-overview.html\nhttps://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/KMS/configuration-changes.html\r\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/cmk-disabled-or-scheduled-for-deletion-alarm.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudWatch_015",
    risk: "중",
    name: "AWS Config 설정이 변경되는 것을 모니터링하고 있는지 확인하시오.        ",
    description:
      "AWS Config는 AWS 계정에 있는 AWS 리소스의 구성을 자세히 보여주는 서비스입니다.\n\nAWS Config의 설정중에서 구성 레코드 중지 및 배치, 배달 채널 삭제 및 배치를 위한 API 호출에 대해서 모니터링해야 합니다. AWS Config의 설정이 변경되는 것을 모니터링하면 AWS 계정 내에서 설정되어 있는 구성 항목을 지속적으로 확인할 수 있고, 무단 네트워크 액세스 혹은 기타 보안 위반으로 이어질 수 있는 우발적이거나 의도적인 변경을 방지할 수 있습니다.\n\n따라서 AWS Config 설정이 변경되는 것을 모니터링 하고, 구성 레코드 중지 및 배치, 배달 채널 삭제 및 배치시 트리거되는 CloudWatch Alarm을 생성해야 합니다.\n\n이렇게 AWS Config 설정이 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventSource = config.amazonaws.com) && (($.eventName = StopConfigurationRecorder) || ($.eventName = DeleteDeliveryChannel) || ($.eventName = PutDeliveryChannel) || ($.eventName = PutConfigurationRecorder)) }",
    inspection:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 :{ ($.eventSource = config.amazonaws.com) && (($.eventName = StopConfigurationRecorder) || ($.eventName = DeleteDeliveryChannel) || ($.eventName = PutDeliveryChannel) || ($.eventName = PutConfigurationRecorder)) }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n",
    action:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 '로그 그룹 생성'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { ($.eventSource = config.amazonaws.com) && (($.eventName = StopConfigurationRecorder) || ($.eventName = DeleteDeliveryChannel) || ($.eventName = PutDeliveryChannel) || ($.eventName = PutConfigurationRecorder)) }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n\n",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/AWS_CIS_Foundations_Benchmark.pdf\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/aws-config-changes-alarm.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "CloudWatch_016",
    risk: "중",
    name: "AWS Organization이 변경되는 것을 모니터링하고 있는지 확인하시오.",
    description:
      "AWS Organizations는 AWS 리소스가 늘어나고 확장됨에 따라 환경을 중앙 집중식으로 관리하고 규제하는데 도움이 되는 서비스입니다.\n\nAWS Organizations 내에서 관리자 별 작업이 발생하는 것을 모니터링해야 합니다. 조직의 생성, 삭제, 조직 내 새로운 계정 생성 또는 제거와 같은 변경사항을 AWS Master 계정내에서 모니터링하는 것이 좋습니다. AWS organizations가 변경되는 것을 모니터링하면 무단 액세스 또는 기타 보안 침해로 이어질 수 있는 우발적이거나 의도적인 변경을 방지할 수 있습니다.\n\n이러한 모니터링 기록들은 AWS Organizations 내에서 수행된 예기치 않은 변경 사항을 조사하고 롤백하는데 도움이 됩니다.\n\n따라서 AWS Organizations가 변경되는 것을 모니터링하고,  조직의 생성, 삭제, 조직 내 새로운 계정 생성 또는 제거와 같은 변경사항이 발생했을 때 트리거되는 CloudWatch Alarm을 생성해야 합니다.\n\n이렇게 AWS Organizations가 변경되는 것을 모니터링하기 위한 Metric Filter는 다음과 같습니다.\n{ ($.eventSource = organizations.amazonaws.com) && ($.eventName = AcceptHandshake) || ($.eventName = AttachPolicy) || ($.eventName = CancelHandshake) || ($.eventName = CreateAccount) || ($.eventName = CreateOrganization) || ($.eventName = CreateOrganizationalUnit) || ($.eventName = CreatePolicy) || ($.eventName = DeclineHandshake) || ($.eventName = DeleteOrganization) || ($.eventName = DeleteOrganizationalUnit) || ($.eventName = DeletePolicy) || ($.eventName = EnableAllFeatures) || ($.eventName = EnablePolicyType) || ($.eventName = InviteAccountToOrganization) || ($.eventName = LeaveOrganization) || ($.eventName = DetachPolicy) || ($.eventName = DisablePolicyType) || ($.eventName = MoveAccount) || ($.eventName = RemoveAccountFromOrganization) || ($.eventName = UpdateOrganizationalUnit) || ($.eventName = UpdatePolicy) }",
    inspection:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 다중-리전 CloudTrail로그 파일을 수신하는 로그 그룹을 클릭한다.\n - 로그 그룹에서 확인할 내용 \n  (1) Multi-Region이 활성화 되어 있는지\n  (2) 모든 관리 이벤트들을 캡처하고 있는지\n  (3) 적어도 Trail의 하나 이상의 이벤트 선택기가 ‘IncludeManagementEvents 가 ‘True’인지, ReadWriteType이 All인지 확인한다.\n6) ‘지표 필터’를 클릭한다.\n \n7) ‘지표 필터’내에의 검색을 이용하여 아래와 같이 적는다.\n \n - 검색 내용 :{ ($.eventSource = organizations.amazonaws.com) && ($.eventName = AcceptHandshake) || ($.eventName = AttachPolicy) || ($.eventName = CancelHandshake) || ($.eventName = CreateAccount) || ($.eventName = CreateOrganization) || ($.eventName = CreateOrganizationalUnit) || ($.eventName = CreatePolicy) || ($.eventName = DeclineHandshake) || ($.eventName = DeleteOrganization) || ($.eventName = DeleteOrganizationalUnit) || ($.eventName = DeletePolicy) || ($.eventName = EnableAllFeatures) || ($.eventName = EnablePolicyType) || ($.eventName = InviteAccountToOrganization) || ($.eventName = LeaveOrganization) || ($.eventName = DetachPolicy) || ($.eventName = DisablePolicyType) || ($.eventName = MoveAccount) || ($.eventName = RemoveAccountFromOrganization) || ($.eventName = UpdateOrganizationalUnit) || ($.eventName = UpdatePolicy) }\n8) 검색 결과에 일치하는 항목이 있는지 확인한다.\n",
    action:
      "1) AWS 콘솔에 접속한다.\n2) ‘서비스’를 클릭한다.\n3) ‘Cloud Watch.’을 클릭한다.\n4) 좌측 네비게이터의 ‘로그’에 ‘로그 그룹’을 클릭한다.\n5) 로그 그룹에서 '로그 그룹 생성'버튼을 클릭하여 로그 그룹을 생성하고, 해당 로그 그룹을 클릭한다.\n6) 지표 필를 클릭한 뒤, 지표 필터 생성 버튼을 클릭하여 지표를 생성하시오.\n7) 패턴 필터링 속에 아래와 같이 입력하시오. \n - { ($.eventSource = organizations.amazonaws.com) && ($.eventName = AcceptHandshake) || ($.eventName = AttachPolicy) || ($.eventName = CancelHandshake) || ($.eventName = CreateAccount) || ($.eventName = CreateOrganization) || ($.eventName = CreateOrganizationalUnit) || ($.eventName = CreatePolicy) || ($.eventName = DeclineHandshake) || ($.eventName = DeleteOrganization) || ($.eventName = DeleteOrganizationalUnit) || ($.eventName = DeletePolicy) || ($.eventName = EnableAllFeatures) || ($.eventName = EnablePolicyType) || ($.eventName = InviteAccountToOrganization) || ($.eventName = LeaveOrganization) || ($.eventName = DetachPolicy) || ($.eventName = DisablePolicyType) || ($.eventName = MoveAccount) || ($.eventName = RemoveAccountFromOrganization) || ($.eventName = UpdateOrganizationalUnit) || ($.eventName = UpdatePolicy) }\n8) Next를 눌러 지표 할당페이지로 이동하시오.\n\n",
    reference:
      "https://docs.aws.amazon.com/ko_kr/organizations/latest/userguide/orgs_tutorials_cwe.html\nhttps://www.cloudconformity.com/knowledge-base/aws/CloudWatchLogs/organizations-changes-alarm.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "S3_001",
    risk: "중",
    name: "S3 버킷에 대해 버킷 정책이 공개적으로 접근가능하지 않도록 설정하였는지 확인하시오.",
    description: "",
    inspection:
      '1. AWS Management Console에 로그인 합니다.\n2.  AWS 전체 서비스 항목에서 \'스토리지\' 아래 S3 페이지로 들어갑니다.\n3. Amazon S3 페이지에서 좌측 네이게이션 바의 \'버킷\'을 클릭합니다.\n4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n5. 해당 버킷의 세부 정보 페이지에서 \'권한\'을 확인합니다.\n6. JSON으로 작성된 \'버킷 정책\'에서 "Effect" 요소가 Allow로 되어 있고, "Prinicipal"요소가 "*"(everyone) 혹은 {"AWS":"*"}로 되어있지 않는지 확인합니다.\n7. "Effect" 항목과 "Principal" 항목이 6번에 제시된 값으로 설정되어 있을 경우, 해당 버킷에 접근이 가능하도록 설정된 것입니다. \n8. 1~6번 작업을 다른 S3 버킷에 대해서도 확인할 수 있습니다.',
    action:
      "1. AWS Management Console에 로그인 합니다.\n 2. AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n 3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n 4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n 5. 해당 버킷의 세부 정보 페이지에서 '권한'을 확인합니다.\n 6. '버킷 정책' 탭에서 '편집'버튼을 클릭합니다.\n 7. 버킷 정책을 아래와 같이 수정합니다.\n  - 특정 AWS 계정이나 IAM 유저를 제한하기 위해서는, Prinicple 요소 값에 특정 계정의 ARN값을 대체합니다.\n 8. 퍼블릭 엑세스 차단(버킷 설정) 탭에서 '편집' 버튼을 클릭합니다.\n 9. 퍼블릭 엑세스 차단(버킷 설정)에서 차단하고자 하는 액세스의 체크 박스를 체크하거나 또는 모든 퍼블릭 액세스 차단 체크 박스에 체크를 하고 '변경 사항 저장' 버튼을 클릭합니다.",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "S3_002",
    risk: "중",
    name: "S3 버킷에 대해 인증된 사용자 그룹의 접속을 허용하지 않는지 확인하시오.",
    description: "",
    inspection:
      "1. AWS Management Console에 로그인 합니다.\n2.  AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n5. 해당 버킷의 세부 정보 페이지에서 '권한'을 확인합니다.\n6. ACL(액세스 제어 목록) 항목에서 '피부여자' 목록에서 '인증된 사용자 그룹(AWS 계정이 있는 모든 사용자)'에 대해서 주어진 '객체'와 '버킷 ACL' 권한을 확인합니다.",
    action:
      "1. AWS Management Console에 로그인 합니다.\n 2. AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n 3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n 4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n 5. 해당 버킷의 세부 정보 페이지에서 '권한'을 확인합니다.\n 6. 'ACL(액세스 제어 목록)' 탭에서 '편집' 버튼을 클릭합니다.\n 7. 인증된 사용자 그룹(AWS 계정이 있는 모든 사용자)의 활성화 되어있는 권한들의 체크박스를 해제합니다.",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "S3_003",
    risk: "중",
    name: "S3 버킷에 대해 퍼블릭 사용자의 접속을 허용하지 않는지 확인하시오",
    description: "",
    inspection:
      "1. AWS Management Console에 로그인 합니다.\n2.  AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n5. 해당 버킷의 세부 정보 페이지에서 '권한'을 확인합니다.\n6. ACL(액세스 제어 목록) 항목에서 '피부여자' 목록에서 '모든 사람(퍼블릭 액세스)'에 대해서 주어진 '객체'와 '버킷 ACL' 권한을 확인합니다.",
    action:
      "1. AWS Management Console에 로그인 합니다.\n 2. AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n 3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n 4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n 5. 해당 버킷의 세부 정보 페이지에서 '권한'을 확인합니다.\n 6. 'ACL(액세스 제어 목록)' 탭에서 '편집' 버튼을 클릭합니다.\n 7. 모든 사람(퍼블릭 액세스)의 활성화 되어있는 권한들의 체크박스를 해제합니다.",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "S3_004",
    risk: "중",
    name: "S3 버킷에 대해 MFA Delete를 사용하고 있는지 확인하시오",
    description: "",
    inspection:
      "1. AWS Management Console에 로그인 합니다.\n2.  AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n5. 해당 버킷의 세부 정보 페이지에서 '속성'을 확인합니다.\n6. '버킷 버전 관리' 항목에서 'Multi-Factor Authentication(MFA) 삭제' 설정이 활성화되어있는지 확인합니다.",
    action:
      "MFA 삭제 설정을 수정하려면 AWS CLI, AWS SDK 또는 Amazon S3 REST API를 사용하십시오. \n (버킷 버전 관리 설정을 변경하고 객체 버전을 영구적으로 삭제하기 위해 Multi-Factor Authentication(MFA)이 필요한 추가 보안 계층입니다.)",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "S3_005",
    risk: "중",
    name: "S3 버킷의 수명 주기 관리를 설정하였는지 확인하시오",
    description: "",
    inspection:
      "1. AWS Management Console에 로그인 합니다.\n2.  AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n5. 해당 버킷의 세부 정보 페이지에서 '관리'을 확인합니다.\n6. '수명 주기 규칙' 항목에서 해당 버킷에 대한 수명 주기 규칙이 존재하는지 확인합니다.",
    action:
      "1. AWS Management Console에 로그인 합니다.\n 2. AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n 3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n 4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n 5. 해당 버킷의 세부 정보 페이지에서 '관리'을 확인합니다.\n 6. '수명 주기 규칙' 탭에서 '수명 주기 규칙 생성' 버튼을 클릭합니다.\n 7. '수명 주기 규칙 구성 (규칙 이름, 규칙 범위 선택, 필터 유형) 작업과 '해당 규칙에서 수행할 작업인 수명 주기 규칙 작업'을 선택한 다음 규칙을 생성합니다.",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "S3_006",
    risk: "중",
    name: "S3 버킷의 객체에 대해 객체 잠금 관리를 설정하였는지 확인하시오",
    description: "",
    inspection:
      "1. AWS Management Console에 로그인 합니다.\n2.  AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n5. 해당 버킷의 세부 정보 페이지에서 '속성'을 확인합니다.\n6. '객체 잠금' 항목에서 해당 설정이 활성화되어있는지 확인합니다.",
    action:
      "1. AWS Management Console에 로그인 합니다.\n 2. AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n 3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n 4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n 5. 해당 버킷의 세부 정보 페이지에서 '속성'을 확인합니다.\n 6. 해당 탭에서 객체 잠금을 확인합니다.(설정 변경이 필요시 AWS에 문의를 해야 합니다.)",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "S3_007",
    risk: "중",
    name: "S3 버킷을 정적 웹사이트로 구성할 때 정적 웹 사이트 호스팅을 활성화 하였는지 확인하시오.",
    description: "",
    inspection: "",
    action: "",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "패치 관리",
    index: "S3_008",
    risk: "중",
    name: "S3 버킷에 대해 버전 관리를 사용하고 있는지 확인하시오 (가용성)",
    description: "",
    inspection:
      "1. AWS Management Console에 로그인 합니다.\n2.  AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n5. 해당 버킷의 세부 정보 페이지에서 '속성'을 확인합니다.\n6. '버킷 버전 관리' 항목에서 해당 설정이 활성화되어있는지 확인합니다.",
    action: "콘솔 확인 불가능",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "로그 관리",
    index: "S3_009",
    risk: "중",
    name: "S3 버킷에 대한 서버 엑세스 로깅를 수집하고 있는지 확인하시오",
    description: "",
    inspection:
      "1. AWS Management Console에 로그인 합니다.\n2.  AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n5. 해당 버킷의 세부 정보 페이지에서 '속성'을 확인합니다.\n6. '서버 액세스 로깅' 항목에서 해당 설정이 활성화되어 있는지 확인합니다.",
    action:
      "1. AWS Management Console에 로그인 합니다.\n 2. AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n 3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n 4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n 5. 해당 버킷의 세부 정보 페이지에서 '속성'을 확인합니다.\n 6. '서버 액세스 로깅' 탭에서 '편집' 버튼을 클릭합니다.\n 7. '서버 액세스 로깅 편집' 페이지에서 '서버 액세스 로깅'- '활성화'를 선택합니다.\n 8. 액세스 로깅의 대상 S3 버킷의 위치(형식: s3://bucket/prefix)를 입력하거나 'S3 찾아보기' 버튼으로 대상 버킷을 선택해줍니다.\n 9. 대상 버킷 지정 후 '변경 사항 저장' 버튼을 클릭합니다.",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "S3_010",
    risk: "중",
    name: "S3 버킷에 대해 객체의 기본 암호화를 사용하고 있는지 확인하시오",
    description: "",
    inspection:
      "1. AWS Management Console에 로그인 합니다.\n2.  AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n5. 해당 버킷의 세부 정보 페이지에서 '속성'을 확인합니다.\n6. '기본 암호화' 항목에서 해당 설정이 활성되어있는지 확인합니다.",
    action:
      "1. AWS Management Console에 로그인 합니다.\n 2. AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n 3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n 4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n 5. 해당 버킷의 세부 정보 페이지에서 '속성'을 확인합니다.\n 6. '기본 암호화' 탭에서 '편집' 버튼을 클릭합니다.\n 7. '기본 암호화 편집' 페이지에서 '서버 측 암호화'-'활성화'를 선택합니다.\n 8. Amazon S3 키(SSE-S3) 또는 AWS Key Management Service 키(SSE-KMS)를 선택합니다.\n  - SSE-E3 : AWS에서 자동으로 생성, 관리 및 사용하는 암호화 키\n  - AWS SSE-KMS : AWS KMS로 보호되는 암호화 키\n  - 고객이 제공한 암호화 키(SSE-C)가 있는 객체를 업로드하려면 AWS CLI, AWS SDK 또는 Amazon S3 REST API를 사용합니다.\n 9. 사용하고자 하는 암호화 키 유형을 선택하고 '변경 사항 저장 ' 버튼을 클릭합니다.",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "S3_011",
    risk: "중",
    name: "서버 기본 암호화를 활성화 했는지 확인하시오",
    description: "",
    inspection:
      "1. AWS Management Console에 로그인 합니다.\n2.  AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n5. 해당 버킷의 세부 정보 페이지에서 '권한'을 확인합니다.\n6. JSON으로 작성된 '버킷 정책'에서 \"Condition\" 요소가 { \"Null\": { \"s3:x-amz-server-side-encryption\": \"true\" } }으로 작성되어있는지 확인합니다.",
    action:
      "1. AWS Management Console에 로그인 합니다.\n 2. AWS 전체 서비스 항목에서 '스토리지' 아래 S3 페이지로 들어갑니다.\n 3. Amazon S3 페이지에서 좌측 네이게이션 바의 '버킷'을 클릭합니다.\n 4. 대시보드에서 점검하고자 하는 버킷의 이름을 클릭하여, 해당 버킷의 세부정보를 확인합니다.\n 5. 해당 버킷의 세부 정보 페이지에서 '권한'을 확인합니다.\n 6. '버킷 정책' 탭에서 '편집'버튼을 클릭합니다.\n 7. 버킷 정책을 아래와 같이 수정합니다.\n  - 서버 기본 암호화 설정을 위해서는 \"Condition\": { \"Null\": { \"s3:x-amz-server-side-encryption\": \"true\" } }을 추가해줍니다.\n 8. 정책 수정을 마치고 \"변경 사항 저장' 버튼을 클릭합니다.",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "S3_012",
    risk: "중",
    name: "S3 버킷에 KMS에 저장된 CMK(고객 마스터 키)를 사용한 서버 측 암호화로 데이터를 보호 하고 있는지 확인하시오.",
    description: "",
    inspection: "",
    action: "",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "권한 관리",
    index: "Lambda_001",
    risk: "중",
    name: "둘 이상의 Lambda 함수가 동일한 IAM 역할을 사용하지 않는지 확인하시오",
    description:
      "AWS Lambda 함수와 해당 IAM 역할 간에는 항상 일대일 관계가 있어야합니다. 즉, 각 Lambda 함수에는 자체 IAM 실행 역할이 있어야하므로이 역할을 함수간에 공유해서는 안됩니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/lamda/ 에서 Lamda 콘솔을 엽니다.\n 2. 좌측 네비게이션 바에서 '함수'를 클릭합니다.\n 3. 확인할 Lambda 함수를 클릭합니다.\n 4. 구성 탭에서 권한 섹션의 '실행 역할'에서 편집을 클릭합니다.\n 5. 실행 역할이 기존 역할 사용인 상태에서, 기존 역할의 IAM 역할의 이름을 확인 합니다.\n * 두 개 이상의 Amazon Lambda 함수가 동일한 IAM 실행 역할을 공유하는 경우 선택한 리전 내에서 사용 가능한 AWS Lambda 함수의 권한 구성이 최소 권한 원칙 (POLP)을 위반합니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후, Lambda 대시 보드로 이동합니다 .\n 2. 탐색 패널의 AWS Lambda 섹션에서 함수를 선택합니다 .\n 3. 수정하려는 Lambda 함수를 클릭합니다.\n 4. 구성 탭에서 권한 섹션의 실행 역할에서 [편집]을 클릭합니다.\n 5. 기본 설정 편집 페이지에서 다음 작업 중 하나를 수행합니다.\n - 기존 실행 역할을 적용하는 경우 : \n 실행 역할을 기존 역할 선택로 선택하고 기존 역할 목록에서 기존 IAM 역할의 이름을 선택합니다. 선택한 IAM 역할은 다른 Lambda 함수와 연결할 수 없으며 선택한 함수에 필요한 액세스 권한 만 제공하여 최소 권한 원칙을 준수해야합니다.\n - 새 실행 역할을 적용하는 경우 : \n 실행 역할을 AWS 정책 템플릿에서 새 역할 생성으로 선택하고 역할 이름을 입력하고 정책 템플릿에서 하나 이상의 템플릿을 선택합니다.\n - 사용자 지정 실행 역할을 적용하는 경우 : \n IAM 콘솔로 이동해서 신뢰할 수 있는 유형의 개체를 선택하고, 사용 사례 선택에서 Lambda를 선택한 뒤 [다음]을 클릭합니다. 권한 정책을 하나 이상 연결하고 권한 경계를 설정합니다. [다음]을 눌러 역할 이름을 입력하고 역할에 대해 검토한 뒤 [역할 만들기]를 눌러 역할을 적용합니다.\n 6. 대시 보드 상단 메뉴에서 [저장] 버튼을 클릭하여 기능 구성을 업데이트하고 개별 IAM 실행 역할을 적용합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/Lambda/sharing-an-iam-role-within-more-than-one-lambda-function.html\nhttp://docs.aws.amazon.com/lambda/latest/dg/with-sns-create-x-account-permissions.html",
    provider: "AWS",
  },
  {
    classification: "권한 관리",
    index: "Lambda_002",
    risk: "중",
    name: "사용가능한 Lambda 함수에 대해 관리자 권한이 없는지 확인하시오",
    description:
      "Lambda 함수의 경우 함수를 호출하거나 관리하기 위한 권한을 계정에 부여할 수 있습니다. 여러 구문을 추가하여 여러 계정에 대한 액세스 권한을 부여하거나, 모든 계정이 함수를 호출하도록 할 수 있습니다. 계정에서의 활동에 대한 응답으로 함수를 호출하는 AWS 서비스에 호출 권한을 부여하도록 정책을 사용할 수도 있습니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/lamda/ 에서 Lamda 콘솔을 엽니다. \n 2. 좌측 네비게이션 바에서 \'함수\'를 클릭합니다.\n 3. 확인할 Lambda 함수를 선택합니다.\n 4. 구성 탭에서 권한 섹션의 실행 역할에서 [편집]을 클릭합니다.\n 5. 기존 역할에서 현재 사용하는 IAM 실행 역할의 이름을 복사합니다 .\n 6. IAM 대시 보드에서 역할로 이동합니다.\n 7. 5단계에서 복사한 실행 역할의 이름을 붙여 넣어 검색합니다.\n 8. 결과로 반환 된 Amazon IAM 실행 역할을 클릭합니다.\n 9. 요약 페이지에서 권한 탭을 선택합니다.\n 10. 각 정책에서 화살표를 누르면 나타나는 [{} JSON]을 클릭합니다.\n 11. 정책 문서에서 활동 및 자원 요소와 현재 값을 식별합니다. 요소 값이 "*"로 설정되고 "Effect"가 "Allow"으로 설정된 경우 연결된 IAM 정책은 모든 AWS 작업 및 리소스에 대한 액세스를 제공합니다.\n 12. 10~11단계를 반복하며 선택한 실행 역할에 연결된 다른 IAM 정책을 확인합니다.\n 13. 지정된 IAM 실행 역할에 연결된 정책 중 하나 이상이 모든 AWS 작업 및 리소스에 대한 액세스 권한을 부여하는 경우, 해당 역할은 관리 권한을 제공하므로 선택한 Amazon Lambda 함수에 관리 권한이 있습니다.',
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/lamda/ 에서 Lamda 콘솔을 엽니다. \n 2. 좌측 네비게이션 바에서 '함수'를 클릭합니다.\n 3. 수정할 Lambda 함수를 선택합니다.\n 4. 구성 탭에서 권한 섹션의 실행 역할에서 [편집]을 클릭합니다.\n 5. 실행 역할 패널 내에서 다음 조치 중 하나를 수행하십시오.\n - 기존 실행 역할을 적용하는 경우 : \n 실행 역할에서 기존 역할을 선택하고, 기존 역할에서 IAM 역할의 이름을 선택합니다. 선택한 IAM 역할은 최소 권한 원칙을 준수하고 선택한 기능에 필요한 액세스 권한만 제공해야합니다.\n - 새 실행 역할을 적용하는 경우 : \n AWS 정책 템플릿에서 새 역할 생성을 선택하고 역할 이름을 입력하고 정책 템플릿에서 하나 이상의 템플릿을 선택합니다.\n - 사용자 지정 실행 역할을 적용하는 경우 : \n IAM 콘솔로 이동해서 신뢰할 수 있는 유형의 개체를 선택하고, 사용 사례 선택에서 Lambda를 선택한 뒤 [다음]을 클릭합니다. 권한 정책을 하나 이상 연결하고 권한 경계를 설정합니다. [다음]을 눌러 역할 이름을 입력하고 역할에 대해 검토한 뒤 [역할 만들기]를 눌러 역할을 적용합니다.\n 6. [저장]을 클릭하여 기능 구성을 업데이트하고 적절한 IAM 실행 역할을 적용합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/Lambda/function-with-admin-privileges.html\nhttps://docs.aws.amazon.com/ko_kr/lambda/latest/dg/access-control-resource-based.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "Lambda_003",
    risk: "중",
    name: "Lambda 함수가 권한 정책을 통해 알 수없는 교차 계정 액세스를 허용하지 않는지 확인하시오",
    description:
      "교차 계정 접근 제어는 여러 User가 복수 계정에서 서로 다른 Role을 손쉽게 이동하면서 관리해야 할 경우를 위한 기능입니다. 이를 통해 AWS 관리 콘솔에서 Role 전환을 쉽게 할 수 있게 하여, User가 여러 AWS 계정 (또는 여러 Role) 환경에서 효과적으로 일을 더 쉽게 할 수 있게 됩니다.\n여러 리소스에 대한 액세스 권한을 갖게 하거나 리소스 기반 정책이 지원하지 않는 API 작업을 사용하게 하려는 신뢰할 수 있는 계정의 경우, 교차 계정 역할을 사용할 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/lamda/ 에서 Lamda 콘솔을 엽니다. \n 2. 좌측 네비게이션 바에서 '함수'를 클릭합니다.\n 3. 확인할 Lambda 함수를 선택합니다.\n 4. 구성 탭에서 권한 섹션에서 '리소스 기반 정책'을 확인합니다.\n 5. Lambda 함수 정책에서 \"Principal\" 값의 AWS 계정 ARN을 확인합니다.\n 6. 해당 ARN이 나열된 신뢰할 수있는 계정 엔터티와 일치하는지 확인합니다.",
    action:
      "[CLI만 가능]\n aws lambda remove-permission\n --region ~~\n --function-name ~~\n --statement-id ~~\n \n aws lambda add-permission\n --region ~~\n --function-name ~~\n --statement-id ~~\n --principal ~신뢰할 수 있는 계정~\n --action lambda:InvokeFunction",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/Lambda/lambda-cross-account-access.html\nhttps://aws.amazon.com/ko/blogs/korea/cross-account-access-in-the-aws-console/\nhttps://docs.aws.amazon.com/ko_kr/kms/latest/developerguide/control-access-overview.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "Lambda_004",
    risk: "중",
    name: "Amazon Lambda 함수가 모든 사람에게 노출되지 않는지 확인하시오",
    description:
      "Lambda 함수의 경우 함수를 호출하거나 관리하기 위한 권한을 계정에 부여할 수 있습니다. 여러 구문을 추가하여 여러 계정에 대한 액세스 권한을 부여하거나, 모든 계정이 함수를 호출하도록 할 수 있습니다. 계정에서의 활동에 대한 응답으로 함수를 호출하는 AWS 서비스에 호출 권한을 부여하도록 정책을 사용할 수도 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/lamda/ 에서 Lamda 콘솔을 엽니다. \n 2. 좌측 네비게이션 바에서 '함수'를 클릭합니다.\n 3. 확인할 Lambda 함수를 선택합니다.\n 4. 구성 탭의 권한 섹션에서 리소스 기반 정책을 확인합니다.\n 5. 리소스 기반 정책에서 \"Principal\"의 값을 확인합니다. \n  - Principal 요소에 \"*\"또는 { \"AWS\": \"*\"} 값 중 하나가 있고, 함수 정책이 'Condition': { 'StringEquals': { 'AWS : SourceAccount ':'<aws_account_number> '}} 과 같은 조건 절을 사용하지 않는 경우, 액세스를 필터링하기 위해 선택한 Amazon Lambda 함수가 익명 액세스에 노출됩니다.",
    action:
      "[CLI만 가능]\n aws lambda remove-permission \n --region ~~\n --function-name ~~\n --statement-id ~삭제할 ID~\n \n aws lambda add-permission\n --region ~~\n --function-name ~~\n --statement-id ~추가할 ID~\n --action lambda:InvokeFunction",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/Lambda/function-exposed.html\nhttps://docs.aws.amazon.com/ko_kr/lambda/latest/dg/access-control-resource-based.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "Lambda_005",
    risk: "중",
    name: "Lambda 함수가 VPC의 리소스에 액세스하도록 구성되어 있는지 확인하시오",
    description:
      "AWS 계정에서 VPC(Virtual Private Cloud)의 프라이빗 서브넷에 연결하도록 Lambda 함수를 구성할 수 있습니다. Amazon Virtual Private Cloud(Amazon VPC)를 사용하여 데이터베이스, 캐시 인스턴스, 내부 서비스 등과 같은 리소스에 대해 프라이빗 네트워크를 생성하십시오. 함수를 VPC에 연결하여 함수가 실행되는 동안 프라이빗 리소스에 액세스합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/lamda/ 에서 Lamda 콘솔을 엽니다. \n 2. 좌측 네비게이션 바에서 '함수'를 클릭합니다.\n 3. 확인할 Lambda 함수를 선택합니다.\n 4. 구성 탭의 VPC 섹션에서 VPC 식별자를 확인합니다. 현재 선택한 VPC가 없는 경우 대신 VPC 구성 없음인 경우, 선택한 Amazon Lambda 함수가 VPC와 연결되지 않으므로 함수가 VPC 별 AWS 리소스에 액세스할 수 없습니다.",
    action:
      "1. AWS Management Console에 로그인한 후, Lambda 대시 보드로 이동합니다 .\n 2. 탐색 패널의 AWS Lambda 섹션에서 함수를 선택합니다 .\n 3. 수정하려는 AWS Lambda 함수를 선택합니다.\n 확인할 Lambda 함수를 클릭합니다.\n 4. 구성 탭의 VPC 섹션에서 편집을 클릭합니다.\n 5. VPC 편집 페이지에서 VPC ID를 선택합니다.\n 6. 두 개 이상의 서브넷을 선택하고, VPC 네트워크 구성을 설정하는 데 사용할 VPC 보안 그룹(들)을 선택합니다. Lambda 함수를 VPC와 연결하면 함수가 기본 인터넷 액세스를 잃게됩니다. AWS Lambda 함수에 대한 외부 인터넷 액세스가 필요한 경우 선택한 보안 그룹이 아웃 바운드 연결을 허용하는지 확인하고 VPC에 NAT 게이트웨이가 연결되어 있는지 확인하십시오.\n 8. 인바운드, 아웃바운 규칙을 확인하고 저장 버튼을 클릭하여 함수 구성을 업데이트합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/Lambda/function-in-vpc.html\nhttps://docs.aws.amazon.com/ko_kr/lambda/latest/dg/configuration-vpc.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "Lambda_006",
    risk: "중",
    name: "Lambda 함수에 최신 버전의 런타임 환경이 사용되는지 확인하시오",
    description:
      "런타임은 단일 버전의 언어, 여러 버전의 언어 또는 여러 언어를 지원할 수 있습니다. (AWS Lambda는 서비스의 모든 사용자에게 단일 버전의 운영 체제와 관리형 언어 런타임을 제공합니다. Lambda에서 사용할 자체 언어 런타임을 가져올 수 있습니다.) 언어 또는 프레임워크 버전이 수명 종료되면 해당 버전의 런타임이 더 이상 사용되지 않습니다. \nAWS 모범 사례를 준수하고 최신 소프트웨어 기능을 받고, 최신 보안 패치와 버그 수정을 받고, 더 나은 성능과 안정성의 혜택을 누리려면 항상 Amazon Lambda 함수에 최신 버전의 실행 환경을 사용해야합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/lamda/ 에서 Lamda 콘솔을 엽니다. \n 2. 좌측 네비게이션 바에서 '함수'를 클릭합니다.\n 3. 확인할 Lambda 함수를 선택합니다.\n 4. 코드 탭의 선택한 기능에 대한 런타임 설정을 확인합니다.\n 5. 런타임이 AWS에서 지원하는 소프트웨어의 최신 버전을 사용하는지 확인합니다. \n - 실행 환경이 최신 버전의 소프트웨어를 사용하도록 구성되지 않은 경우 선택한 AWS Lambda 함수가 이전 (더 이상 사용되지 않는) 런타임 환경을 사용하므로 업그레이드하는 것이 좋습니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후, Lambda 대시 보드로 이동합니다 .\n 2. 탐색 패널의 AWS Lambda 섹션에서 함수를 선택합니다 .\n 3. 수정하려는 Lambda 함수를 선택합니다.\n 4. 코드 탭의 런타임 설정에서 [편집]을 클릭합니다.\n 5. 런타임을 선택한 Lambda 함수가 사용하는 최신 버전의 실행 환경으로 선택하고 [저장]을 클릭하여 구성 변경 사항을 적용합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/Lambda/runtime-environment.html\nhttps://aws.amazon.com/ko/lambda/faqs/\nhttps://docs.aws.amazon.com/ko_kr/lambda/latest/dg/lambda-runtimes.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "Lambda_007",
    risk: "중",
    name: "Lambda 함수에 대해 추적이 활성화되어 있는지 확인하시오",
    description:
      "함수를 호출하는 서비스에서 X-Ray 추적을 활성화한 경우 Lambda는 자동으로 추적을 X-Ray로 보냅니다.\nAWS X-Ray를 사용하면 애플리케이션의 구성 요소를 시각화하고, 성능 병목 현상을 식별하고, 오류가 발생한 요청을 문제 해결할 수 있습니다. Lambda 함수는 추적 데이터를 X-Ray로 보내고, X-Ray는 데이터를 처리하여 서비스 맵과 검색 가능한 추적 요약을 생성합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/lamda/ 에서 Lamda 콘솔을 엽니다. \n 2. 좌측 네비게이션 바에서 '함수'를 클릭합니다.\n 3. 확인할 Lambda 함수를 선택합니다.\n 4. 구성 탭의 Monitoring and operations tools 섹션에서 활성 추적 상태가 '활성화됨' 인지 확인합니다. \n 5. 설정 확인란이 활성화되지 않은 경우, 추적 기능이 현재 활성화되어 있지 않으므로 선택한 Lambda 함수에 대한 AWS X-Ray 지원이 활성화되지 않습니다.",
    action:
      '1. AWS Management 콘솔에 로그인한 후, Lambda 대시 보드로 이동합니다 .\n 2. 탐색 패널의 AWS Lambda 섹션에서 함수를 선택합니다 .\n 3. 수정하려는 Lambda 함수를 선택합니다.\n 4. 구성 탭의 Monitoring and operations tools 섹션에서 [편집]을 클릭합니다.\n 5. AWS X-Ray 섹션의 활성 추적을 활성화 합니다. 함수가 트리거되면 추적이 생성되고 캡처되기 시작하여 오류 및 예외, 성능 병목 현상 및 제한을 식별하고 해결할 수 있습니다.\n 6. [저장]을 클릭하여 기능에 대한 구성 변경 사항을 적용합니다. 활성 추적 기능이 활성화 된 상태로 함수 구성이 저장되면 Lambda는 필요한 권한이없는 경우 함수의 현재 역할에 "xray : PutTraceSegments", "xray : PutTelemetryRecords"권한을 자동으로 추가합니다.',
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/Lambda/tracing.html\nhttps://docs.aws.amazon.com/ko_kr/lambda/latest/dg/services-xray.html\nhttps://docs.aws.amazon.com/ko_kr/xray/latest/devguide/aws-xray.html",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "Lambda_008",
    risk: "중",
    name: "Lambda 환경 변수에 대해 암호화가 활성화되어 있는지 확인하시오",
    description:
      "환경 변수를 사용하면 코드를 업데이트하지 않고도 함수의 동작을 조정할 수 있습니다. 환경 변수는 함수의 버전별 구성에 저장된 문자열 쌍입니다. Lambda 런타임은 코드에서 환경 변수를 사용할 수 있게 하고 함수 및 호출 요청에 대한 정보가 포함된 추가 환경 변수를 설정합니다.\nLambda는 계정에서 생성한 키(AWS 관리형 고객 마스터 키(CMK))로 환경 변수를 암호화합니다. 기본 키 대신에 사용할 Lambda에 자체 키를 제공하는 방법을 선택할 수도 있습니다. 키를 제공하면 키에 대한 액세스 권한이 있는 계정의 사용자만 함수에서 환경 변수를 보거나 관리할 수 있습니다. 또한 조직이 암호화에 사용되는 키를 관리하고 교체 시기를 제어해야 하는 내부 또는 외부 요구 사항을 가질 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/lamda/ 에서 Lamda 콘솔을 엽니다. \n 2. 좌측 네비게이션 바에서 '함수'를 클릭합니다.\n 3. 확인할 Lambda 함수를 선택합니다.\n 4. 구성 탭의 환경 변수 섹션에서 [편집]을 클릭합니다.\n 5. 암호화 구성을 확장하고 '전송 중 암호화용 도우미 활성화' 상태를 확인합니다.\n  - 설정 확인란이 활성화되지 않았거나 설정이 활성화되어 있지만 필수 환경 변수 (예 : 키 이름으로 식별되는 규칙 설정 내에서 정의 된 변수)가 암호화되지 않은 경우, 키 값이 표시됩니다. \n 변수 선택한 기능에 민감한 데이터를 전달하는 것은 암호화되지 않으므로 민감한 정보는 무단 액세스로부터 보호되지 않습니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후, Lambda 대시 보드로 이동합니다 .\n 2. 탐색 패널의 AWS Lambda 섹션에서 Functions를 선택합니다 .\n 3. 수정하려는 Lambda 함수를 선택합니다.\n \n 4. 구성 탭의 환경 변수 섹션에서 [편집]을 클릭합니다.\n 5. 암호화 구성을 확장하고 '전송 중 암호화용 도우미 활성화' 상태를 확인합니다. 선택한 기능에 대한 암호화 도우미가 활성화되지 않은 경우 전송 중 암호화 활성화 확인란을 선택하여 활성화하고 그렇지 않으면이 단계를 건너 뜁니다.\n (6) 암호화 키를 aws / lambda (기본) 키를 선택하여 AWS 관리형 키(기본 암호화 키)로 환경 변수를 암호화합니다. CMK 키를 사용하고 암호화 된 데이터에 액세스할 수 있는 사용자를 제어하려면 고유한 CMK (고객 마스터 키)를 생성하고 관리해야 합니다. 암호화 키는 AES-256 알고리즘을 구현하고 AWS Key Management Service (AWS KMS)에서 관리합니다.\n 7. 민감한 데이터를 보관하는 환경 변수를 선택한 다음 변수 값 옆에있는 암호화 버튼 을클릭합니다. 이렇게하면 입력한 값이 마스킹되고 그 결과 값을 암호화하기 위해 AWS KMS를 호출하여 암호 텍스트로 반환합니다.실행 시간전송 중 암호화 창인 암호 해독 스 니펫은 Lambda 함수의 런타임에 특정한 샘플 해독 코드를 제공합니다. 응용 프로그램과 함께 사용하십시오.실행 시간이 단계를 반복하여 민감한 데이터를 선택한 Lambda 함수로 전달하는 다른 환경 변수에 대한 암호화를 활성화합니다.\n 8. [저장]을 클릭하여 변경 사항을 적용하고 선택한 환경 변수를 암호화합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/Lambda/encryption-environment-variables.html\nhttps://docs.aws.amazon.com/ko_kr/lambda/latest/dg/configuration-envvars.html",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "Lambda_009",
    risk: "중",
    name: "Lambda 환경 변수가 KMS CMK로 암호화하는지 확인하시오",
    description:
      "Lambda는 계정에서 생성한 키(AWS 관리형 고객 마스터 키(CMK))로 환경 변수를 암호화합니다. 키를 제공하면 키에 대한 액세스 권한이 있는 계정의 사용자만 함수에서 환경 변수를 보거나 관리할 수 있습니다. 또한 조직이 암호화에 사용되는 키를 관리하고 교체 시기를 제어해야 하는 내부 또는 외부 요구 사항을 가질 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/lamda/ 에서 Lamda 콘솔을 엽니다. \n 2. 좌측 네비게이션 바에서 '함수'를 클릭합니다.\n 3. 확인할 Lambda 함수를 선택합니다.\n 4. 구성 탭의 환경 변수 섹션에서 편집을 클릭합니다.\n 5. 환경 변수 페이지에서 암호화 구성 부분의 '전송 중 암호화용 도우미 활성화'가 체크되어 있는지 확인합니다.\n \n  (그렇지 않으면 이 규칙을 참조하여 암호화를 활성화 하십시오 ), 저장 중 암호화할 AWS KMS 키를 확인합니다. 암호화 키가 \"(기본값) aws/lambda\" 인 경우 선택한 AWS Lambda 함수에 대해 정의된 환경 변수는 KMS CMK 고객 관리 형 키 대신 기본 마스터 키 (AWS 관리 형 키)를 사용하여 암호화됩니다.",
    action:
      '1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n 2. 탐색 패널에서 고객 관리 키를 클릭 합니다.\n 3. [키 생성]을 클릭 합니다.\n 4. 키 유형, 별칭과 설명을 입력합니다.\n 5. 키 관리 권한 정의 페이지에서 새로운 CMK를 관리할 수 있는 IAM 사용자 및 역할을 선택합니다. \n 6. 키 사용 권한 정의 페이지에서 새로운 CMK를 사용하여 환경 변수 데이터를 암,복호화할 수 있는 IAM 사용자 및 역할을 선택합니다. \n (7) CMK를 암호화에 사용할 수있는 다른 AWS 계정을 추가하려면 [외부 계정 추가]를 클릭합니다. 외부 AWS 계정의 소유자도 IAM 사용자에 대한 정책을 생성하여 이 CMK에 대한 액세스 권한을 제공해야합니다. 이후 [다음]을 클릭하십시오.\n 8. 키 정책 검토 및 편집 페이지에서 미리 정의된 액세스 정책을 검토하고 [완료]를 클릭합니다. 키가 성공적으로 생성되면 KMS 서비스 대시 보드에 "별칭이 ~~이고 키 ID가 ~~~~인 마스터 키가 생성되었습니다."라는 확인 메시지가 표시됩니다.\n 9. KMS CMK 고객 관리형 키가 프로비저닝되었으므로 Lambda 대시 보드로 이동합니다.\n 10. 탐색 패널에서 함수를 선택합니다.\n 11. 수정하려는 Lambda 함수를 클릭합니다.\n 12. 구성 탭의 환경 변수 섹션에서 [편집]을 클릭합니다.\n 13. 저장 중 암호화할 AWS KMS 키를 새로 생성한 KMS CMK 고객 관리 키의 이름을 선택합니다.\n 14. 민감한 데이터를 보관하는 환경 변수를 선택하고, 변수 값 옆에있는 [암호화]를 클릭합니다. 새 KMS CMK 고객 관리 키를 사용하여 민감한 데이터를 선택한 Lambda 함수로 전달하는 다른 환경 변수를 암호화합니다.\n 15. [저장]을 클릭하여 변경 사항을 적용합니다.',
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/Lambda/lambda-encrypted-with-cmk.html\nhttps://docs.aws.amazon.com/ko_kr/lambda/latest/dg/configuration-envvars.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "EC2_001",
    risk: "중",
    name: "모든 AWS 계정이 AMI에 접근할 수 없도록 설정되어있는지 확인하시오.",
    description:
      "\nAmazon Machine Images(AMI)는 인스턴스를 시작하는 데 필요한 정보를 제공합니다. 동일한 구성의 인스턴스가 필요할 때는 AMI르 이용하여 여러 인스턴스를 만들 수 있습니다.  그러나 EC2에서는 소유한 AMI를 퍼블릭으로 설정할 경우 실행 중인 인스턴스를 공격하거나 손상시킬 수 있는 요소들이 노출될 수 있기 때문에 AMI에 대한 퍼블릭 액세스를 허용하는 것은 주의해야 합니다. 따라서 AMI를 공유할 때 민감한 데이터의 유출을 방지하려면 공유 Linux AMI 지침에 설명된 보안상 고려 사항을 확인하여 권장 조치를 따라야 합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽 사이드바에서 '이미지' 메뉴에서 'AMI' 탭을 클릭합니다. \n3. 대시보드의 상단의 필터 박스에서 '사용자 소유' 필터를 선택하고 검사할 AMI 선택합니다.\n4. 해당 AMI의 '표시 여부'가 '퍼블릭'인지 '프라이빗'인지 확인합니다.\n5. 대시보드 하단의 검사 중인 AMI의 '세부 정보' 탭에서 'AMI ID'와 'AMI 이름'을 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽 사이드바에서 '이미지' 메뉴에서 'AMI' 탭을 클릭합니다. \n3. 대시보드의 상단의 필터 박스에서 '사용자 소유' 필터를 선택합니다.\n4. '사용자 소유'의 AMI의 '표시 여부'가 '퍼블릭'인 경우 해당 AMI를 선택합니다.\n5. 대시보드 상단의 '작업' 버튼을 누르고 '이미지 권한 수정' 작업을 실행합니다. \n6. '프라이빗'으로 변경해주고 '저장'버튼을 누릅니다.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf\nhttps://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/sharingamis-intro.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "EC2_002",
    risk: "중",
    name: "백엔드 인스턴스의 네트워크가 퍼블릭 서브넷으로  구성되어 있지 않은지 확인하시오.",
    description:
      "백엔드 서버란 3-Tier-Architecture에서 퍼블릭하게 공개되어 있으면 안되는 사용자 정보나 해당 어플리케이션의 데이터에 접근하는 것을 가능하게 하는 서버입니다. 따라서 백엔드 서버에 대한 공개적인 액세스를 차단하면서 퍼블릭 웹 애플리케이션을 실행하는 것을 권장합니다. \n퍼블릭 서브넷의 인스턴스는 인터넷에 바로 아웃바운드 트래픽을 전송할 수 있는 반면, 프라이빗 서브넷의 인스턴스는 그렇게 할 수 없습니다. 또한 프라이빗 서브넷의 인스턴스는 퍼블릭 서브넷에 있는 NAT(Network Address Translation) 게이트웨이를 사용하여 인터넷에 액세스할 수 있습니다. 소프트웨어 업데이트 시 NAT 게이트웨이를 사용하여 데이터베이스 서버를 인터넷에 연결할 수 있지만, 인터넷에서 데이터베이스 서버 연결을 설정할 수 없습니다.\n\n",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2/.로 이동합니다.\n2 \"인스턴스\" 메뉴 하위 항목인 \"인스턴스\"를 선택합니다. \n3. 검사할 실행 중인 EC2 인스턴스를 선택합니다.\n4. 대시보드 아래 패널의 '세부정보' 탭을 선택합니다\n5. '인스턴스 요약'의 '서브넷 ID'의 값을 클릭하여 VPC 대시보드의 '서브넷' 메뉴에서  이동합니다.\n6. 대시보드 아래 패널의 '라우팅테이블' 탭을 선택합니다.\n7. '라우팅' 대상 값이 0.0.0.0/0 또는 ::/0로 설정되었는지 확인합니다.\n",
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2/.로 이동합니다.\n2 "인스턴스" 메뉴 하위 항목인 "인스턴스"를 선택합니다. \n3. 검사할 실행 중인 EC2 인스턴스를 선택합니다.\n4. 대시보드 아래 패널의 "설명" 탭을 선택합니다\n5. 왼쪽 열에서 "서브넷 ID" 속성을 확인하고 값을 복사합니다.\n6. VPC 대시보드 https://console.aws.amazon.com/vpc/. 로 이동합니다.\n7. "가상 사설 클라우드" 메뉴에서 "서브넷" 항목을 선택합니다.\n8. "서브넷 ID"를 대시보드의 "탐색 박스"에 붙여넣습니다.\n9. 반환된 VPC 서브넷을 선택하고 우측 상단의 \'작업\'을 누릅니다.\n10. \'CIDR 편집\'으로 들어가 \'새 IPv4 CIDR 추가\' 작업을 진행하고 \'닫기\'합니다.',
    reference:
      "\nhttps://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/VPC_Scenario2.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "EC2_003",
    risk: "중",
    name: "어플리케이션 계층의 로드밸런서의 Scheme(체계) 설정이 'Internal(내부)'로 되어있는지 확인하시오.",
    description:
      "ELB(Elastic Load Balancing)는 둘 이상의 가용 영역에서 EC2 인스턴스, 컨테이너, IP 주소 등 여러 대상에 걸쳐 수신되는 트래픽을 분산시켜 시스템의 가용성과 내결함성을 높여줍니다. \n웹 계층의 서버는 인터넷 경계(internet-facing) 로드 밸런서에서 요청을 수신하고, 애플리케이션 계층의 ALB 또는 CLB를 통해 생성한 내부(internal) 로드 밸런서로 요청을 전송합니다.\n그리고 애플리케이션 서버는 내부 로드 밸런서에서 요청을 수신합니다.\n\nApp Tier ELB를 내부적으로 생성하면 인터넷에서 App Tier에 액세스할 수 없지만, 웹 계층 인스턴스에서 액세스할 수 있습니다.\n(CIS 3-Tier 아키텍쳐 6.26 Rationale)\n",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽 사이드바에서 '로드 밸런싱' 메뉴에서 '로드밸런서' 탭을 클릭합니다.\n3. 대시보드에서 검사할 로드 밸런서를 선택하고, 하단의 '설명' 탭을 확인합니다.\n4. '설명' 탭에서 '기본 구성'의 '체계'가 'internal'인지 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽 사이드바에서 '로드 밸런싱' 메뉴에서 '로드밸런서' 탭을 클릭합니다.\n3. 대시보드 상단의 'Load Balancer 생성' 버튼을 눌러 새로운 로드 밸런서를 생성해줍니다.\n4. 'Classic Load Balancer'의 경우 '기본 구성' 단계에서 '내부 Load Balancer 생성'을 체크해줍니다.\n5. 'Application Load Balancer' 또는 'Network Load Balancer' 생성에서는 '기본 구성' 단계에서 '체계'를 '내부'로 선택해줍니다.\n6. '내부 Load Balancer' 체크 또는 '내부' 체계 선택을 끝내고 로드 밸런서 생성을 마칩니다.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "EC2_004",
    risk: "중",
    name: "인스턴스의 '보안 그룹 이름'이 'launch-wizard-xx'로 시작하는 보안 그룹과 연결되어 있지 않도록 설정했는지 확인하시오.",
    description:
      '\n\n\n\n보안 그룹은 EC2 인스턴스에 대한 수신 및 발신 트래픽을 제어하는 가상 방화벽 역할을 합니다. 인바운드 규칙은 인스턴스로 들어오는 트래픽을 제어하고 아웃바운드 규칙은 인스턴스에서 나가는 트래픽을 제어합니다. \nEC2 콘솔에서 인스턴스를 시작하면 인스턴스 시작 마법사가 새 보안 그룹을 생성할 때 자동으로 이름을 "launch-wizard-xx"로 정의하며 기본 보안 그룹 대신 해당 그룹을 인스턴스와 연결할 수 있습니다. 그러나 해당 보안 그룹은 모든 소스(ex) 0.0.0.0/0)에서 포트 22의 인바운드 인그레이스 트래픽을 허용하는 기본 구성과 함께 제공되는 것입니다. 이는 해당 보안 그룹이 연결되어 있는 인스턴에 해킹, 무차별 공격 또는 D-Dos(서비스 거부) 공격과 같은 악의적인 활동의 기회가 증가하게 됩니다. \n',
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽의 사이드 바에서 "네트워크 및 보안" 탭에서 "보안그룹"을 누릅니다.\n3. 상단의 검색창에 "launch-wizard"를 검색합니다.\n4. 검색 결과로 나온 보안그룹이 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽의 사이드 바에서 "네트워크 및 보안" 탭에서 "보안그룹"을 누릅니다.\n3. 상단의 검색창에 "launch-wizard"를 검색합니다.\n4. 검색된 보안 그룹을 선택합니다.\n5. "작업" 버튼을 누르고 "새 보안 그룹에 복사"를 누릅니다.\n6. 올바른 이름을 입력하고 "보안 그룹 생성" 버튼을 누릅니다.\n7. 왼쪽의 사이드 바에서 "인스턴스" 탭에서 "인스턴스"을 누릅니다.\n8. 인스턴스 필터링 검색창에 "보안 그룹 이름: launch-wizard-4"로 검색합니다.\n9. 검색된 인스턴스에 대해 "작업" 버튼을 누르고 "보안" 탭을 누르고 "보안 그룹 변경"을 누릅니다.\n10. 연결된 보안 그룹 섹션에서 검색창에 새로 만든 보안 그룹을 검색하고 "보안 그룹 추가" 버튼을 누릅니다.\n11. "launch-wizard"를 접두사로 가진 보안 그룹을 "제거" 버튼을 눌러 제거합니다.',
    reference:
      "https://docs.aws.amazon.com/ko_kr/vpc/latest/userguide/VPC_SecurityGroups.html,\n https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/ec2-security-groups.html#default-security-group",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "EC2_005",
    risk: "중",
    name: "ASG(Auto Scaling Group)의 시작 구성에 '보안 그룹 이름'이 'AutoScaling-Security-Group-xx'로 시작하는 보안 그룹과 연결되어 있지 않도록 설정했는지 확인하시오.",
    description:
      "\n\nAmazon EC2 Auto Scailing 시작 구성 생성 설정\n보안 그룹에서 그룹의 인스턴스와 연결할 보안 그룹을 생성하거나 선택합니다. Create a new security group(새 보안 그룹 생성) 옵션을 선택된 상태로 두면 AutoScaling-Security-Group-xx'로 시작하는 보안 그룹이 생성됩니다.\n이 보안 그룹은 Linux를 실행하는 Amazon EC2 인스턴스에 대해 기본 SSH 규칙이 구성되고, 기본 RDP 규칙은 Windows를 실행하는 Amazon EC2 인스턴스에 대해 구성됩니다.\n해당 규칙은 모든 소스( 0.0.0.0/0)에 대한  인바운드를 허용합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽의 사이드 바에서 'Auto Scaling' 하위 메뉴인 '시작 구성'으로 들어갑니다.\n3. 검사하고자 하는 시작 구성의 왼쪽 체크 박스를 체크합니다.\n4. 하단의 세부정보 탭에서 '보안 그룹'의 ID를 클릭합니다.\n5.  AWS Management 콘솔의 보안그룹 페이지에서 검색된 '보안그룹 이름'을 확인합니다. ",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽의 사이드 바에서 'Auto Scaling' 하위 메뉴인 '시작 구성'으로 들어갑니다.\n3. 점검하려는 시작 구성의 왼쪽 체크 박스를 체크합니다.\n4. 오른쪽 상단의 '작업' - ' 시작 구성 복사'를 클릭합니다.\n5. '시작 구성 생성' 페이지의 보안 그룹 탭에서 다른 보안그룹을 생성 또는 선택합니다.\n6. 변경, 수정 사항을 마치고 '시작 구성 생성' 버튼을 클릭하여 저장합니다.\n7. '시작 구성' 페이지에서  'AutoScaling-Security-Group-xx'로 시작하는 보안 그룹과 연결된 시작 구성을 클릭합니다.\n8. 오른쪽 상단 '작업' - '시작 구성 삭제'를 클릭합니다.",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "EC2_006",
    risk: "중",
    name: "default 보안그룹과 연결된 EC2 '인스턴스'나 '시작 구성' 또는 '시작 템플릿'이 존재하는지 확인하시오.",
    description:
      "인스턴스를 시작할 때 보안 그룹을 지정하지 않을 경우 VPC에 대해 인스턴스는 'default' 보안 그룹과 자동으로 연결됩니다.\n'default' 보안 그룹의 규칙은 'default' 보안 그룹과 연결된 다른 인스턴스의 모든 인바운드 트래픽 허용하고,  보안 그룹은 인바운드 규칙에서 소스 보안 그룹으로 지정됩니다. 그리고 인스턴스의 모든 아웃바운드 트래픽을 허용합니다.\n'default' 보안 그룹을 사용하여 퍼블릭 액세스를 허용할 경우 해킹, 무차별 대입 공격(Brute-force attack) 또는 서비스 거부(DoS attack) 공격에 취약합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2/.로 이동합니다.\n2. "인스턴스" 메뉴 하위 항목인 "인스턴스"를 선택합니다. \n3. 인스턴스 페이지에서 속성 필터 박스를 클릭하여 드롭다운 목록에서 "보안 그룹 이름"을 고르고, 속성 값으로 "default"을 선택합니다.\n4. 인스턴스 대시보드에서 "보안그룹"이 "default"인 인스턴스가 존재하는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2/.로 이동합니다.\n2. "네트워크 및 보안" 메뉴 하위 항목인 "보안 그룹"을 선택합니다. \n3. 새 보안 그룹을 생성하고, 다시 인스턴스 메뉴로 돌아갑니다.\n4. 해당 인스턴스에 새 보안그룹을 연결합니다.',
    reference:
      "https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/WindowsGuide/ec2-security-groups.html",
    provider: "AWS",
  },
  {
    classification: "",
    index: "",
    risk: "중",
    name: "",
    description: "",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2/.로 이동합니다. \n 2. \"Auto Scaling\" 메뉴 하위 항목인 '시작 구성'을 선택합니다.\n 3. 검사하려는 시작 구성을 클릭합니다.\n 4. 하단의 세부 정보 탭에서 연결되어 있는 '보안 그룹'을 확인하고 클릭합니다.\n 5. 보안그룹 페이지에서 시작 구성에 연결되어 있는 '보안 그룹 이름'이 'default' 인지 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2/.로 이동합니다. \n 2. \"Auto Scaling\" 메뉴 하위 항목인 '시작 구성'을 선택합니다.\n 3. 조치하려는 시작 구성을 클릭합니다.\n 4. 우측 상단의 '작업' - '시작 구성 복사'를 클릭합니다.\n 5. '시작 구성 생성' 페이지에서 보안 그룹 할당 탭에서 '보안 그룹 이름'이 'default'가 아닌 다른 보안그룹을 선택해줍니다.\n 6. 다른 보안 그룹 선택을 마치고 '시작 구성 생성' 버튼을 클릭합니다.\n 7. 'default' 보안그룹이 연결되어 있는 시작구성을 선택합니다.\n 8. 상단의 '작업' - '시작 구성 삭제' - '삭제'를 클릭해 삭제해줍니다.",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "",
    index: "",
    risk: "중",
    name: "",
    description: "",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2/.로 이동합니다. \n 2. '인스턴스' 메뉴의 하위 메뉴인 '시작 템플릭'을 선택합니다.\n 3. 검사하려는 시작 템플릿의 '시작 템플릿 ID'를 클릭합니다.\n 4. 해당 시작 템플릿 세부 정보 탭에서 '인스턴스 세부 정보'에서 연결되어 있는 '보안 그룹 ID'를 확인하고 복사합니다.\n 5. 좌측 네이게이션의 '네트웨크 및 보안' 메뉴의 하위 메뉴인 '보안그룹'을 선택합니다.\n 6. 보안그룹 페이지에서 4번에서 복사했던 보안 그룹 ID를 검색 필터에 붙여넣고 검색합니다.\n 7. 검색된 보안그룹의 '보안 그룹 이름'이 'default'인지 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2/.로 이동합니다. \n 2. '인스턴스' 메뉴의 하위 메뉴인 '시작 템플릭'을 선택합니다.\n 3. 조치하려는 시작 템플릿의 왼쪽 체크박스에 체크합니다.\n 4. 우측 상단의 '작업' - '템플릿 수정(새 버전 생성)'을 클릭합니다.\n 5. 템플릿 수정(새 버전 생성) 페이지에서 보안 그룹 탭에서 'default' 보안 그룹을 삭제하고 다른 보안 그룹을 연결합니다.\n 6. 설정을 마치고 '템플릿 버전 생성' 버튼을 클릭합니다.\n 7. 새 버전이 생성된 해당 시작 템플릿의 왼쪽 체크박스에 체크하고 '작업' - '기본 버전 설정'을 클릭합니다.\n 8. 새로 생성된 버전을 기본 버전으로 설정합니다.\n 9. '작업' - '템플릿 버전 삭제'에서 default 보안그룹이 적용된 시작 템플릿을 삭제합니다.",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "EC2_007",
    risk: "중",
    name: "EBS를 사용하는 EC2 인스턴스가 최대 절전모드 기능이 활성화되어 있는지 확인하시오.",
    description:
      "EC2 인스턴스에 대한 '최대 절전 모드(Hibernation, 또는 수면 모드)'를 활성화하는 것은 인스턴스 상태가 '최대 절전 모드'가 될 때 인메모리 상태가 루트 EBS 볼륨에 있는 파일에 저장된 다음 인스턴스를 종료 시킵니다. EBS 볼륨에 저장된 데이터들은 인스턴스를 재시작할 때, 이전에 연결된 데이터 볼륨이 다시 연결되어 EBS 볼륨 이전 상태로 되돌릴 수 있습니다. \n인스턴스는 60일까지만 최대 절전 모드로 유지할 수 있습니다. 인스턴스를 60일 이상 유지하려면 최대 절전 모드의 인스턴스를 재개한 다음 '최대절전 모드'를 설정하지 않고 중지와 시작을 수행해야 합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 왼쪽의 사이드 바에서 "인스턴스" 탭에서 "인스턴스"을 누릅니다.\r\n3. 점검할 인스턴스 ID를 누르고 세부정보로 들어갑니다.\r\n4. 아래에 "세부 정보" 탭을 누릅니다.\r\n5. "중지-최대 절전 모드 동작"가 "활성화됨"으로 설정되어 있는지 확인합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\r\n2. 왼쪽의 사이드 바에서 "인스턴스" 탭에서 "인스턴스"을 누릅니다.\r\n3. 설정하려는 인스턴스를 선택합니다.\r\n4. "작업" 버튼을 누르고 "이미지 및 템플릿"을 누르고 "이미지 생성"을 누릅니다.\r\n5. "재부팅 안 함"을 활성화하고 나머지 필수 값들을 알맞게 입력합니다.\r\n6. "이미지 생성" 버튼을 누릅니다.\r\n7. 왼쪽의 사이드 바에서 "이미지" 탭에서 "AMI"를 누릅니다.\r\n8. 생성한 이미지를 선택합니다.\r\n9. "작업" 버튼을 누르고 "시작하기"를 누릅니다.\r\n10. "인스턴스 유형 선택"에서 인스턴스를 선택하고 "다음: 인스턴스 세부 정보 구성" 버튼을 누릅니다.\r\n11. "최대 절전 중지 동작" 항목에 "추가 종료 동작으로 최대 절전 모드를 활성화"를 활성화합니다.\r\n12. 나머지 인스턴스 생성 과정을 거칩니다.\r\n13. "검토 및 시작" 버튼을 누릅니다.\r\n14. 왼쪽의 사이드 바에서 "인스턴스" 탭에서 "인스턴스"을 누릅니다.\r\n15. 이전의 인스턴스를 선택합니다.\r\n16. "인스턴스 상태" 버튼을 누르고 "인스턴스 종료"를 누릅니다.\r\n17. "종료" 버튼을 누릅니다.',
    reference:
      "\nhttps://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/Hibernate.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "EC2_008",
    risk: "중",
    name: "ASG(Auto Scaling Groups)에 속하지 않는 인스턴스에 대해 종료 방지 기능을 사용하도록 설정했는지 확인하시오.",
    description:
      "애플리케이션 아키텍처에 Amazon EC2 Auto Scaling를 추가하는 것은 AWS 클라우드의 이점을 극대화하는 한 가지 방법입니다.ASG(Auto Scaling Group)에서는 인스턴스가 비정상 상태일 때 이를 감지하여 종료한 다음 이를 대체할 인스턴스를 시작할 수 있습니다. 또한 애플리케이션이 항상 현재 트래픽 요구를 처리할 수 있는 올바른 용량을 갖추도록 도와줍니다. 이를 통해 비용 관리도 개선할 수 있습니다.\n\n종료 방지 기능을 활성화 하지 않으면  EC2, 콘솔, 명령줄, API를 사용해서 인스턴스를 종료할 수 있습니다. 그러나  인스턴스가 실수로 종료되지 않도록 하기 위해 해당 인스턴스에 대한 종료 방지 기능을 활성화를 해야 합니다. Auto Scaling 그룹에 있는 인스턴스의 종료 보호를 위해선 'EC2 Auto Scaling 설정'에서 제어할 수 있습니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2/.로 이동합니다.\n 2. "인스턴스" 메뉴 하위 항목인 "인스턴스"를 선택합니다. \n 3. 검사할 실행 중인 EC2 인스턴스를 선택합니다.\n 4. 대시보드 아래 패널의 "설명" 탭을 선택합니다\n 5. 오른쪽 열에서 "종료 방지" 플래그 값을 확인합니다. 만약 "종료 보호" 값이 "아니요"이라면, 해당 기능은 사용할 수 없고 예기치 못한 종료에 해당 인스턴스를 보호할 수 없습니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽의 사이드 바에서 "인스턴스" 탭에서 "인스턴스"을 누릅니다.\n3. 인스턴스 하나를 선택하고, \'확인\'의 드롭다운 버튼을 클릭하여 인스턴스 설정 -  Attach to Auto Scaling Group 설정합니다.',
    reference:
      "https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/terminating-instances.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "EC2_009",
    risk: "중",
    name: "인스턴스가 ASG(Auto Scaling Groups) 내에서 실행되었는지 확인하시오.",
    description:
      "애플리케이션 아키텍처에 Amazon EC2 Auto Scaling를 추가하는 것은 AWS 클라우드의 이점을 극대화하는 한 가지 방법입니다.ASG(Auto Scaling Group)에서는 인스턴스가 비정상 상태일 때 이를 감지하여 종료한 다음 이를 대체할 인스턴스를 시작할 수 있습니다. 또한 애플리케이션이 항상 현재 트래픽 요구를 처리할 수 있는 올바른 용량을 갖추도록 도와줍니다. 이를 통해 비용 관리도 개선할 수 있습니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2/.로 이동합니다.\n2. "인스턴스" 메뉴 하위 항목인 "인스턴스"를 선택합니다. \n3. 검사할 실행 중인 EC2 인스턴스를 선택합니다.\n4. 대시보드 아래 패널의 "설명" 탭을 선택합니다\n5. 오른쪽 열에서 "종료 방지" 플래그 값을 확인합니다.  만약 "종료 보호" 값이 "아니요"이라면, 해당 기능은 사용할 수 없고 예기치 못한 종료에 해당 인스턴스를 보호할 수 없습니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽의 사이드 바에서 "인스턴스" 탭에서 "인스턴스"을 누릅니다.\n3. 인스턴스 하나를 선택하고, \'확인\'의 드롭다운 버튼을 클릭하여 인스턴스 설정 -  Attach to Auto Scaling Group 설정합니다.',
    reference:
      "\r\nhttps://docs.aws.amazon.com/ko_kr/autoscaling/ec2/userguide/auto-scaling-benefits.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "EC2_010",
    risk: "중",
    name: "인스턴스의 ASG(Auto Scaling Groups)의 시작 구성/시작 템플릿에 각 계층에서 사용하는 보안그룹을 적용하여 구성했는지 확인하시오.",
    description:
      "각 계층에서 요구하는 보안그룹을 각  Auto Scaling의 'Launch Configuration'에 적용합니다.\n웹/앱 계층의 인스턴스는  시작 템플릿 또는 Auto-Scaling Launch Configuration에 구성된 보안그룹을 사용하여 시작합니다. 이 보안그룹은 각 계층의 관련된 트래픽만 허용하며, 시작 구성에서 해당 계층 보안 그룹으로만 구성되었는지 확인해야 합니다.\n",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽 사이드바에서 'Auto Scaling' 메뉴에서 '시작 구성'으로 들어갑니다.\n3. 대시보드에서 점검하고자 하는 시작 구성을 선택합니다.\n4. 하단의 '세부 정보' 탭에서 '보안 그룹' 설정을 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽 사이드바에서 'Auto Scaling' 메뉴에서 '시작 구성'으로 들어갑니다.\n3. 대시보드 상단의 '시작 구성 생성' 버튼을 클릭합니다.\n4. '시작 구성 생성' 페이지에서 '보안 그룹' 규칙 설정한 후 '시작 구성 생성' 버튼을 눌러줍니다.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "",
    index: "",
    risk: "중",
    name: "",
    description: "",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n 2. 왼쪽 사이드바에서 '인스턴스' 메뉴에서 '시작 템플릿'으로 들어갑니다.\n 3. 대시보드에서 점검하고자하는 시작 템플릿을 클릭합니다.\n 4. 시작 템플릿의 세부 정보 페이지에서 '인스턴스 세부 정보'에서 연결되어 있는 '보안 그룹 ID'를 확인하고 복사합니다.\n 5. 좌측 네이게이션의 '네트웨크 및 보안' 메뉴의 하위 메뉴인 '보안그룹'을 선택합니다.\n 6. 보안그룹 페이지에서 4번에서 복사했던 보안 그룹 ID를 검색 필터에 붙여넣고 검색합니다.\n 7. 검색된 보안그룹이 해당 계층에 맞게 보안 적용되었는지 보안그룹 규칙을 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n 2. 왼쪽 사이드바에서 '인스턴스' 메뉴에서 '시작 템플릿'으로 들어갑니다.\n 3. 조치하고자하는 시작 템플릿을 클릭합니다.\n 4. 우측 상단의 '작업' - ' 템플릿 수정(새 버전 생성)'을 클릭합니다.\n 5. 템플릿 수정 페이지에서 해당 계층에 맞는 보안 그룹을 연결하고 '템플릿 버전 생성'을 클릭합니다.\n 6. 템플릿 새 버전 생성이 완료되면, 기존 템플릿 버전을 '작업' - '템플릿 버전 삭제'를 통해 삭제해줍니다.\n 7. 삭제하려는 템플릿 버전이 기본 버전으로 설정되어 있다면 새로 생성한 템플릿 버전으로 '기본 버전 설정'을 해주고 삭제합니다.",
    reference: "",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "EC2_011",
    risk: "중",
    name: "Web-tier ELB에 연결된 보안그룹이 다른 계층에서 사용되고 있는지 확인하시오.",
    description:
      "웹 계층의 ELB가 3-Tier 아키텍쳐에서 외부 액세스를 허용합니다.\n웹 계층의 ELB는 유일한 공개 대상이며 모든 IP 리소스 (0.0.0.0/0)에서 어플리케이션 포트의 인바운드 트래픽을 허용하는 규칙이 있어야 합니다.\n웹 계층 ELB에 대한 아웃바운드 보안 그룹 규칙은 적절한 애플리케이션 포트에 대한 백엔드 웹 서버 인스턴스로만 제한되어야 합니다.\n공개적으로 액세스할 수 없는 다른 인스턴스에 웹 계층의 ELB 보안 그룹을 연결하면 해당 웹 계층이 무단 액세스에 노출됩니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽 사이드바에서 'Auto Scaling' 메뉴의 'Auto Scaling 그룹'으로 들어갑니다.\n3. 점검하려는 Auto Scaling 그룹을 선택합니다.\n4. 하단 '세부 정보' 탭에서 '보안'에 있는 '보안 그룹'을 확인합니다. ",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽 사이드바에서 '네트워크 및 보안' 메뉴에서 '보안 그룹'으로 들어갑니다.\n3. ELB에 설정되어 있는 보안 그룹을 선택합니다.\n4. 대시보드 우측 상단의 '작업'에서 '인바운드 규칙 편집'으로 들어갑니다. \n5. '인바운드 규칙 편집' 페이지에서 '인바운드 규칙'의 '유형'을 '모든 트래픽'으로 설정하여 '규칙 추가'를 해줍니다.\n6. '규칙 추가'를 완료하면 '규칙 저장' 버튼을 눌러줍니다.\n7. '보안 그룹' 대시보드에서 '작업'을 누르고 '아웃바운드 규칙 편집'으로 들어갑니다.\n8. '아웃바운드 규칙 편집'에서는 어플리케이션 포트의 액세스를 허용하는 규칙을 추가합니다.\n9. '규칙 추가'를 완료하면 '규칙 저장' 버튼을 눌러 조지 작업을 마칩니다. ",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "로그 관리",
    index: "EC2_012",
    risk: "중",
    name: "ELB의 로깅이 Enable로 설정되어 있는지 확인하시오.",
    description:
      "ELB는 로드밸런서로 전송되는 모든 요청을 기록하고 S3에 저장된 로그 내에 저장할 수 있습니다. 이를 통해 어플리케이션 장애를 진단하고 웹 트래픽과 들어오는 트래픽의 보안 분석을 수행할 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽 사이드바에서 'Auto Scaling' 메뉴의 'Auto Scaling 그룹'으로 들어갑니다.\n3. 점검하려는 Auto Scaling 그룹을 선택합니다.\n4. 하단 '세부 정보' 탭에서 '속성'의 '액세스 로그' 설정을 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2 에서 EC2 콘솔을 엽니다.\n2. 왼쪽 사이드바에서 'Auto Scaling' 메뉴의 'Auto Scaling 그룹'으로 들어갑니다.\n3.  Auto Scaling 그룹을 선택하고, 하단 '세부 정보' 탭에서 '속성'에서 '액세스 로그 구성' 버튼을 클릭합니다.\n4. '액세스 로그 구성' 페이지에서 '액세스 로그 활성화'를 선택합니다.\n5. '간격' 값은 60분 기본값을 유지하며, Load Blancer와 같은 리전에 있는 S3 위치를 입력합니다.\n6. 입력이 끝나면 '저장' 버튼을 눌러 조치 작업을 마칩니다.",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "EC2_013",
    risk: "중",
    name: "AMI의 암호화를 설정했는지 확인하시오.",
    description:
      "Amazon 머신 이미지(AMI)는 인스턴스를 시작하는 데 필요한 정보를 제공합니다. 동일한 구성의 인스턴스가 여러 개 필요할 때는 한 AMI에서 여러 인스턴스를 시작할 수 있습니다. \n\nAmazon EBS 스냅샷의 지원을 받는 AMI에서는 Amazon EBS 암호화를 활용할 수 있습니다. 데이터 볼륨과 루트 볼륨 모두의 스냅샷을 암호화하고 AMI에 연결할 수 있습니다. 전체 EBS 암호화 지원을 통해 인스턴스를 시작하고 이미지를 복사할 수 있습니다. 이러한 작업을 위한 암호화 파라미터는 AWS KMS(Key Management Service)가 지원되는 모든 리전에서 사용가능 합니다. \n암호화 된 EBS 볼륨이 있는 EC2 인스턴스는 다른 인스턴스와 동일한 방법으로 AMI에서 시작될 수 있습니다. 또한 암호화되지 않은 EBS 스냅샷을 지원하는 AMI에서 인스턴스를 시작할 때, 해당 볼륨의 일부 또는 전체를 암호화 할 수도 있습니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인하고 https://console.aws.amazon.com/ec2/.로 이동합니다.\n2. 왼쪽 메뉴바의 "이미지" 아래 "AMI"을 선택합니다.\n3. 검사할 이미지를 선택합니다.\n4. "세부 정보" 탭에서 "블록 디바이스" 속성 값의  EBS 스냅샷 ID를 복사합니다. \n5. 왼쪽 메뉴바의 "ELASTIC BLOCK STORE" 아래 "스냅샷"을 선택합니다.\n6. 대시보드 상단의 메뉴 아래에 위치한 "속성별 필터 박스"를 클릭하여, "스냅샷 ID"를 리스트에서 선택합니다.\n7. 이전에 복사했던 값을 "스냅샷 ID"에 붙여 넣습니다.\n8. 반환된 EBS 스냅샷을 선택하고, "설명" 탭에서 선택된 스냅샷의 "암호화" 속성값을 체크합니다.',
    action:
      '1. AWS Management 콘솔에 로그인하고https://console.aws.amazon.com/ec2/.로 이동합니다.\n2. 왼쪽 메뉴바의 "이미지" 아래 "AMI"을 선택합니다.\n3. 암호화할 AMI를 선택합니다.\n4. 대시보드 상단 메뉴 중 "작업"을 "AMI 복사"를 선택합니다.\n5. "AMI 복사" 대화상자에서 "대상 리전"를 선택합니다.\n6. "이름"과 "설명"의 내용을 기입합니다.\n7. "암호화" 여부 체크 박스를 체크하고 "AMI 복사" 버튼을 클릭합니다. \n8. "저장" 버튼을 누릅니다.',
    reference:
      "https://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/AMIEncryption.html,\n\nhttps://docs.aws.amazon.com/ko_kr/AWSEC2/latest/UserGuide/CopyingAMIs.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "KMS_001",
    risk: "중",
    name: "Amazon KMS 마스터 키가 모든 사람에게 노출되지 않는지 확인하시오.",
    description:
      "계정 관리자는 IAM 자격 증명(즉, 사용자, 그룹, 역할)에 권한 정책을 연결할 수 있고, 일부 서비스(예: AWS KMS)에서는 다른 종류의 리소스에 대한 권한 정책 연결도 지원합니다.\n한 AWS 계정의 IAM 사용자 또는 역할이 다른 AWS 계정의 고객 마스터 키 (CMK)를 사용하도록 허용 할 수 있습니다. CMK를 생성하거나 기존 CMK에 대한 권한을 변경할 때 이러한 권한을 추가 할 수 있습니다.\n따라서, 보안 주체에게 CMK를 사용할 수있는 권한을 부여 할 때 주의해야 합니다. 사용자에게 필요한 작업에만 필요한 CMK에 대한 액세스 권한만 부여하도록 합니다. 또한 익숙하지 않은 CMK, 특히 다른 계정의 CMK를 사용하지 않도록 합니다. 악의적인 사용자가 CMK를 사용하여 귀하 또는 귀하의 계정에 대한 정보를 얻을 수있는 권한을 귀하에게 부여할 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다.\n2. 탐색 패널의 고객 관리형 키를 클릭합니다.\n3. 검사 할 KMS 마스터 키를 클릭합니다.\n4. 키 정책 탭 [정책 보기]를 클릭하고 [편집]을 클릭하여 \"Principal\"의 값이 특정 AWS 계정으로 승격되지 않는 경우 ( 예 : \"Principal\": { \"AWS\": \"*\"}), 정책이 필터링에 'Condition': { 'StringEquals': { 'kms : CallerAccount': '<aws_account_number>'}} )와 같은 조건 절을 사용하여 액세스를 필터링하지 않는 경우 , 선택한 AWS KMS 키가 인터넷의 모든 사용자에게 노출됩니다.",
    action:
      '1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n2. 탐색 패널의 고객 관리형 키를 클릭합니다.\n3. 재구성하려는 KMS 키를 클릭합니다.\n4. 키 정책 탭 [정책 보기]를 클릭하고 [편집]을 클릭하여 "Principal"의 값을 "Everyone" 수령인 (예 : \'*\' )에서 을 AWS 계정 ID 또는 AWS 계정 ARN으로 바꿉니다.\n또는, "Condition \': {"StringEquals ": {"kms : CallerAccount ":"123456789012 "}}와 같은 조건 절을 기존 정책 설명에 추가합니다.\n5. 변경 사항 저장을 클릭하여 정책 변경 사항 을 적용합니다.',
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/KMS/key-exposed.html\nhttps://docs.aws.amazon.com/ko_kr/kms/latest/developerguide/control-access-overview.html\nhttps://docs.aws.amazon.com/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "KMS_002",
    risk: "중",
    name: "Amazon KMS 마스터 키가 알 수없는 교차 계정 액세스를 허용하지 않는지 확인하시오.",
    description:
      "한 IAM 계정의 AWS 사용자 또는 역할이 다른 고객 마스터 키 계정의 CMK(AWS)를 사용하도록 허용할 수 있습니다. 을 생성하거나 기존 CMK에 대한 권한을 변경할 때 이러한 권한을 추가할 수 있습니다.\n보안 주체에 CMKs를 사용할 수 있는 권한을 부여하지 않도록 주의하십시오. 가능하면 최소 권한 원칙을 따르십시오. 사용자에게 필요한 작업에만 필요한 CMKs에 대한 액세스 권한을 부여합니다. 또한 익숙하지 않은 CMK, 특히 다른 계정의 CMK를 사용할 때는 주의해야 합니다. 악의적인 사용자가 CMK를 사용하여 사용자 또는 사용자 계정에 대한 정보를 가져올 수 있는 권한을 부여할 수 있습니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다.\n2. 탐색 패널에서 고객 관리형 키를 클릭합니다.\n3. 검사할 KMS 마스터 키를 클릭합니다.\n4. 키 정책 탭에서 키 정책에서 [정책 보기]를 클릭하여 "Principal"의 값으로 정의 된 AWS 계정 ID 또는 AWS 계정 ARN을 식별합니다.\n5. 해당 식별자가 신뢰할 수 있는 계정 엔터티와 일치하지 않는 경우, 선택한 KMS 마스터 키에 대한 교차 계정 액세스가 보호되지 않습니다.',
    action:
      '1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다.\n2. 탐색 패널에서 고객 관리형 키를 클릭합니다.\n3. 재구성하려는 KMS 키를 클릭합니다.\n4. 키 정책 탭 [정책 보기]를 클릭하고 [편집]을 클릭하여  "Principal"의 값을 기존의 신뢰되지 않은 AWS 식별자를 신뢰할 수있는 식별자로 바꿉니다.\n5. [변경 사항 저장]을 클릭하여 정책 변경 사항을 적용합니다.',
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/KMS/kms-cross-account-access.html\nhttps://docs.aws.amazon.com/ko_kr/kms/latest/developerguide/key-policy-modifying-external-accounts.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "KMS_003",
    risk: "중",
    name: "Amazon KMS 마스터 키가 삭제 예약되거나 비활성화되어 있는지 확인하시오.",
    description:
      "CMK가 삭제되면 해당 키로 암호화 된 모든 데이터를 복구 할 수 없게됩니다. 암호화 된 데이터 손실을 방지하기 위해 실수로 또는 의도적으로 삭제 예약 된 비활성화 된 AWS KMS 고객 마스터 키 (CMK)를 식별합니다.",
    inspection:
      "AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n2. 탐색 패널에서 고객 관리형 키를 클릭합니다.\n3. 상태 열에서 삭제 예약된 모든 키를 확인하십시오. 현재 상태가 '삭제 대기 중'이면 키가 삭제되도록 예약된 것입니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n2. 탐색 패널에서 고객 관리형 키를 클릭합니다.\n3. 상태 열에서 현재 상태가 삭제 대기 중으로 설정된 키를 확인합니다.\n4. 키를 선택하고 키 작업에서 키 삭제 취소를 선택합니다.\n5. 예약된 삭제 작업이 취소되면 키 상태가 '삭제 대기 중'에서 '비활성화됨'으로 변경됩니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/KMS/kms-customer-master-key-pending-deletion.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "KMS_004",
    risk: "중",
    name: "Amazon KMS 마스터 키의 키 순환 기능이 활성화되어 있는지 확인하시오.",
    description:
      "키 교체는 암호화 작업에 사용되는 암호화 구성 요소인 CMK의 백업 키만 변경합니다. 는 백업 키가 변경되는지 여부 또는 백업 키가 변경되는 횟수에 관계없이 동일한 논리적 리소스로, CMK의 속성은 변경되지 않습니다.\n자동 키 교체를 하면 키 ID, 키 ARN, 리전, 정책 및 권한을 포함하여 CMK의 속성은 키가 교체될 때 변경되지 않고, ID 또는 ARN을 참조하는 애플리케이션이나 별칭을 변경할 필요가 없다는 이점이 있습니다. 또한, 키 교체를 활성화한 후 AWS KMS는 매년 자동으로 CMK를 교체합니다. 업데이트를 기억하거나 예약할 필요가 없습니다.\n그러나 자동 키 교체는 CMK가 보호하는 데이터에 영향을 미치지 않습니다. CMK에서 생성한 데이터 키를 교체하거나 CMK에서 보호되는 데이터를 다시 암호화하지 않으며, 손상된 데이터 키의 영향을 완화하지 않습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n2. 탐색 패널에서 고객 관리형 키를 클릭합니다.\n3. 별칭 열에서 확인해야 하는 CMK의 별칭을 선택합니다.\n4. 키 교체 탭에서 '매년 이 CMK를 자동으로 교체합니다.'가 활성화 되어 있는지 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n2. 탐색 패널에서 고객 관리형 키를 클릭합니다.\n3. 별칭 열에서 확인해야하는 CMK의 별칭을 선택합니다 .\n4. 키 교체 탭에서 '매년 이 CMK를 자동으로 교체합니다.'를 활성화합니다.\n5. [저장]을 클릭합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/KMS/key-rotation-enabled.html\nhttps://docs.aws.amazon.com/ko_kr/kms/latest/developerguide/rotate-keys.html",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "KMS_005",
    risk: "중",
    name: "KMS 고객 마스터 키 (CMK)가 사용 중인지 확인하시오",
    description:
      "키 사용은 CMK가 암호화 및 암호 해독 또는 서명 및 확인에 사용되는지 여부를 결정하는 CMK 속성입니다. 둘 다 선택할 수는 없습니다. 두 가지 이상의 작업 유형에 CMK를 사용하면 두 작업의 제품이 공격에 더 취약해집니다.\n대칭 CMKs의 키 사용은 항상 암호화 및 암호 해독입니다. 타원 곡선(ECC) CMKs의 키 사용은 항상 서명 및 확인입니다. RSA CMKs의 키 사용만 선택하면 됩니다. 키 사용은 를 생성CMK할 때 선택하며 이후에는 변경할 수 없습니다. 잘못된 키 사용을 선택한 경우 를 삭제CMK하고 새 키를 생성합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후, EC2 대시 보드로 이동합니다.\n2. 탐색 패널의 Elastic Block Store 에서 볼륨을 클릭하십시오.\n3. 검사해야하는 EBS 볼륨을 선택합니다.\n4. 설명 탭에서 KMS 키 별칭 값을 확인합니다.\n5. 사용된 KMS 키 별칭 (이름)이 aws / ebs 이면 해당 볼륨은 AWS 관리형 키를 사용하는 것입니다. 이 키는 볼륨 생성시 암호화를위한 CMK를 지정하지 않을 때 기본적으로 사용됩니다. 볼륨 암호화를 완전히 제어하려면 자체 CMK 고객 관리 키를 사용해야 합니다.",
    action:
      '1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n2. 탐색 패널에서 고객 관리형 키를 클릭합니다.\n3. 상단 메뉴에서 [키 생성]을 클릭합니다.\n4. 키 유형, 별칭과 설명을 입력합니다.\n5.  키 관리 권한 정의 페이지에서 새로운 CMK를 관리할 수 있는 IAM 사용자 및 역할을 선택하고 [다음]을 클릭합니다.\n6. 키 사용 권한 정의 페이지에서 새로운 CMK를 사용할 수 있는 IAM 사용자 및 역할을 선택합니다. \n(7) CMK를 암호화에 사용할 수있는 다른 AWS 계정을 추가하려면 [외부 계정 추가]를 클릭합니다. 외부 AWS 계정의 소유자도 IAM 사용자에 대한 정책을 생성하여 이 CMK에 대한 액세스 권한을 제공해야합니다. 이후 [다음]을 클릭하십시오.\n8. 키 정책 검토 및 편집 페이지에서 미리 정의된 액세스 정책을 검토하고 [완료]를 클릭합니다. 키가 성공적으로 생성되면 KMS 서비스 대시 보드에 "별칭이 ~~이고 키 ID가 ~~~~인 마스터 키가 생성되었습니다."라는 확인 메시지가 표시됩니다.\n9. CMK를 구현하여 EBS 볼륨 데이터를 암,복호화하기 위해 EC2 대시 보드로 이동합니다.\n10. 탐색 패널의 Elastic Block Store 에서 볼륨을 클릭하십시오 .\n11. 암호화된 EBS 볼륨을 선택하여 작업에서 스냅샷 생성을 선택합니다. \n12. 스냅샷 생성 페이지에서 볼륨과 설명을 입력합니다.\n14. 탐색 패널의 Elastic Block Store 에서 스냅샷을 클릭하십시오 .\n15. 새로 생성된 EBS 스냅샷을 선택하고 작업에서 복사를 선택합니다.\n17. 스냅샷 복사 창에서 새로운 마스터 키를 선택하고 [복사]합니다.\n18. 복사된 EBS 스냅샷을 선택하고 작업에서 볼륨 생성을 선택합니다.\n19. 볼륨 생성 창에서 볼륨 구성 정보를 검토하고 [볼륨 생성]을 클릭합니다.\n20. 탐색 패널로 돌아가 볼륨을 클릭 합니다.\n21. 원래 EBS 볼륨 (AWS 관리 키로 암호화 됨)을 선택합니다.\n22. 대시 보드 상단 메뉴에서 볼륨 분리를 선택합니다.\n23. 볼륨 분리 창에서 [예, 분리]를 선택합니다.\n24. 새로 생성된 EBS 볼륨을 선택하고 작업에서 볼륨 연결을 선택합니다.\n26. 볼륨 연결 창에서 EC2 인스턴스 ID와 디바이스를 입력한 후 [연결]을 클릭합니다 .\n28. 하단 패널에서 설명 탭을 선택하고 KMS 키 별칭 값을 확인하여 생성된 EBS 볼륨이 자체 CMK 고객 관리 키를 사용하는지 확인합니다.',
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/KMS/kms-customer-master-key-cmk-in-use.html\nhttps://docs.aws.amazon.com/ko_kr/kms/latest/developerguide/concepts.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "KMS_009",
    risk: "중",
    name: "웹 tier에 대해 AWS 계정에 생성된 Amazon KMS 고객 마스터 키(CMK)가 있는지 확인하시오.",
    description:
      "AWS 서비스 수준 암호화 (예 : EBS, RDS, S3), 파일 및 응용 프로그램 수준 암호화를 위한 키 관리를 위해 CMK를 사용할 수 있습니다.\n고객이 생성한 고객 마스터키(CMK)가 웹 계층에 대해 생성되었는지 확인합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n2. 탐색 패널에서 고객 관리형 키를 클릭 합니다 .\n3. 선택한 AWS 리전에 프로비저닝된 CMK가없는 경우, 데이터베이스 계층에 대해 생성된 KMS CMK가 없습니다. \n4. KMS 대시 보드에 하나 이상의 CMK가 나열될 경우, 검사할 KMS CMK의 별칭을 클릭합니다.\n5.  태그 탭에서 웹 계층에 해당하는 태그 세트를 검색합니다. \n6. 키 태그 세트가 데이터베이스 계층에 적합하지 않거나, 키에 태그 전혀없는 경우, 웹 계층에 대해 생성된 KMS CMK가 없는 것입니다.",
    action:
      '1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n2. 탐색 패널에서 고객 관리형 키를 클릭합니다.\n3. 대시 보드 상단 메뉴에서 키 생성 버튼을 클릭하여 설정 프로세스를 시작합니다.\n4. 키 유형, 별칭과 설명을 입력합니다.\n5. 태그 추가 페이지에서 새 KMS 키 (예 : 웹 계층 암호화 키)의 ID를 관리하는 태그를 만듭니다. 추가한 태그가 웹 계층을 구성하는 데 사용된 태그 집합과 일치하는지 확인한 뒤 [다음]을 클릭합니다.\n6.  키 관리 권한 정의 페이지에서 새로운 CMK를 관리할 수 있는 IAM 사용자 및 역할을 선택하고 [다음]을 클릭합니다.\n7. 키 사용 권한 정의 페이지에서 새로운 CMK를  사용할 수 있는 IAM 사용자 및 역할을 선택합니다. \n(8) CMK를 암호화에 사용할 수있는 다른 AWS 계정을 추가하려면 [외부 계정 추가]를 클릭합니다. 외부 AWS 계정의 소유자도 IAM 사용자에 대한 정책을 생성하여 이 CMK에 대한 액세스 권한을 제공해야합니다. 이후 [다음]을 클릭하십시오.\n9. 키 정책 검토 및 편집 페이지에서 미리 정의된 액세스 정책을 검토하고 [완료]를 클릭합니다. 키가 성공적으로 생성되면 KMS 서비스 대시 보드에 "별칭이 ~~이고 키 ID가 ~~~~인 마스터 키가 생성되었습니다."라는 확인 메시지가 표시됩니다.',
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/KMS/web-tier-customer-master-key.html\nCIS Benchmark 3tier",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "KMS_007",
    risk: "중",
    name: "앱 tier에 대해 AWS 계정에 생성된 Amazon KMS 고객 마스터 키(CMK)가 있는지 확인하시오.",
    description:
      "AWS 서비스 수준 암호화 (예 : EBS, RDS, S3), 파일 및 응용 프로그램 수준 암호화를 위한 키 관리를 위해 CMK를 사용할 수 있습니다.\n고객이 생성한 고객 마스터키(CMK)가 앱 계층에 대해 생성되었는지 확인합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n2. 탐색 패널에서 고객 관리형 키를 클릭 합니다 .\n3. 선택한 AWS 리전에 프로비저닝된 CMK가없는 경우, 데이터베이스 계층에 대해 생성된 KMS CMK가 없습니다. \n4. KMS 대시 보드에 하나 이상의 CMK가 나열될 경우, 검사 할 KMS CMK의 별칭을 클릭합니다.\n5.  태그 탭에서 앱 계층에 해당하는 태그 세트를 검색합니다. \n6. 키 태그 세트가 데이터베이스 계층에 적합하지 않거나, 키에 태그 전혀없는 경우, 앱 계층에 대해 생성된 KMS CMK가 없는 것입니다.",
    action:
      '1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n2. 탐색 패널에서 고객 관리형 키를 클릭합니다.\n3. 대시 보드 상단 메뉴에서 키 생성 버튼을 클릭하여 설정 프로세스를 시작합니다.\n4. 키 유형, 별칭과 설명을 입력합니다.\n5. 태그 추가 페이지에서 새 KMS 키 (예 : 앱 계층 암호화 키)의 ID를 관리하는 태그를 만듭니다. 추가한 태그가 앱 계층을 구성하는 데 사용된 태그 집합과 일치하는지 확인한 뒤 [다음]을 클릭합니다.\n6.  키 관리 권한 정의 페이지에서 새로운 CMK를 관리할 수 있는 IAM 사용자 및 역할을 선택하고 [다음]을 클릭합니다.\n7. 키 사용 권한 정의 페이지에서 새로운 CMK를  사용할 수 있는 IAM 사용자 및 역할을 선택합니다. \n(8) CMK를 암호화에 사용할 수있는 다른 AWS 계정을 추가하려면 [외부 계정 추가]를 클릭합니다. 외부 AWS 계정의 소유자도 IAM 사용자에 대한 정책을 생성하여 이 CMK에 대한 액세스 권한을 제공해야합니다. 이후 [다음]을 클릭하십시오.\n9. 키 정책 검토 및 편집 페이지에서 미리 정의된 액세스 정책을 검토하고 [완료]를 클릭합니다. 키가 성공적으로 생성되면 KMS 서비스 대시 보드에 "별칭이 ~~이고 키 ID가 ~~~~인 마스터 키가 생성되었습니다."라는 확인 메시지가 표시됩니다.',
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/KMS/app-tier-customer-master-key.html\nhttps://docs.aws.amazon.com/ko_kr/kms/latest/developerguide/tag-authorization.html\nCIS Benchmark 3tier",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "KMS_008",
    risk: "중",
    name: "데이터 tier에 대해 AWS 계정에 생성된 Amazon KMS 고객 마스터 키(CMK)가 있는지 확인하시오.",
    description:
      "AWS 서비스 수준 암호화 (예 : EBS, RDS, S3), 파일 및 응용 프로그램 수준 암호화를 위한 키 관리를 위해 CMK를 사용할 수 있습니다.\n고객이 생성한 고객 마스터키(CMK)가 데이터베이스 계층에 대해 생성되었는지 확인합니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n2. 탐색 패널에서 고객 관리형 키를 클릭 합니다 .\n3. 선택한 AWS 리전에 프로비저닝된 CMK가없는 경우, 데이터베이스 계층에 대해 생성된 KMS CMK가 없습니다. \n4. KMS 대시 보드에 하나 이상의 CMK가 나열될 경우, 검사 할 KMS CMK의 별칭을 클릭합니다.\n5.  태그 탭에서 데이터베이스 계층에 해당하는 태그 세트를 검색합니다. \n6. 키 태그 세트가 데이터베이스 계층에 적합하지 않거나, 키에 태그 전혀없는 경우, 데이터베이스 계층에 대해 생성된 KMS CMK가 없는 것입니다.",
    action:
      '1. AWS Management 콘솔에 로그인한 후, KMS 대시 보드로 이동합니다 .\n2. 탐색 패널에서 고객 관리형 키를 클릭합니다.\n3. 대시 보드 상단 메뉴에서 키 생성 버튼을 클릭하여 설정 프로세스를 시작합니다.\n4. 키 유형, 별칭과 설명을 입력합니다.\n5. 태그 추가 페이지에서 새 KMS 키 (예 : 데이터베이스 계층 암호화 키)의 ID를 관리하는 태그를 만듭니다. 추가한 태그가 데이터베이스 계층을 구성하는 데 사용된 태그 집합과 일치하는지 확인한 뒤 [다음]을 클릭합니다.\n6.  키 관리 권한 정의 페이지에서 새로운 CMK를 관리할 수 있는 IAM 사용자 및 역할을 선택하고 [다음]을 클릭합니다.\n7. 키 사용 권한 정의 페이지에서 새로운 CMK를  사용할 수 있는 IAM 사용자 및 역할을 선택합니다. \n(8) CMK를 암호화에 사용할 수있는 다른 AWS 계정을 추가하려면 [외부 계정 추가]를 클릭합니다. 외부 AWS 계정의 소유자도 IAM 사용자에 대한 정책을 생성하여 이 CMK에 대한 액세스 권한을 제공해야합니다. 이후 [다음]을 클릭하십시오.\n9. 키 정책 검토 및 편집 페이지에서 미리 정의된 액세스 정책을 검토하고 [완료]를 클릭합니다. 키가 성공적으로 생성되면 KMS 서비스 대시 보드에 "별칭이 ~~이고 키 ID가 ~~~~인 마스터 키가 생성되었습니다."라는 확인 메시지가 표시됩니다.',
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/KMS/database-tier-customer-master-key.html\nCIS Benchmark 3tier",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "RDS_001",
    risk: "중",
    name: "IAM 데이터베이스 인증 기능이 활성화되어 있는지 확인하시오",
    description:
      "MySQL / PostgreSQL 데이터베이스 인스턴스에 연결할 때 암호를 사용할 필요가없고 대신 인증 토큰을 사용합니다. 인증 토큰은 AWS RDS가 요청시 생성하는 수명이 15 분인 고유 한 문자열입니다. IAM 데이터베이스 인증은 인증이 AWS IAM을 사용하여 외부에서 관리되기 때문에 데이터베이스 구성 내에 사용자 자격 증명을 저장할 필요가 없습니다.",
    inspection:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 왼쪽 탐색 패널의 Amazon RDS 에서 인스턴스를 클릭 합니다.\n3. 검사 할 RDS 인스턴스를 선택하고 DB 인스턴스 열에 있는 리소스 이름 (링크)을 클릭합니다 .\n4. 내 세부 정보 패널 섹션에서 구성의 범주, 체크 IAM DB 인증 사용 구성 속성 값을 확인합니다.속성 값이 No로 설정되어 있으면 선택된 Amazon RDS 데이터베이스 인스턴스에 대해 IAM 데이터베이스 인증 기능이 활성화되지 않은 것입니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후 Amazon RDS 콘솔을 엽니다.\n2. 탐색 창에서 데이터베이스를 선택한 다음 변경하려는 DB 인스턴스를 선택합니다.\n3. [수정]을 선택합니다. [DB 인스턴스 수정] 페이지가 나타납니다.\n4. 데이터베이스 인증을 암호 및 IAM 데이터베이스 인증으로 선택합니다.\n5. [계속]을 선택하고 수정 사항 요약을 확인합니다.\n(6) 즉시 적용을 선택하여 변경 내용을 즉시 적용합니다. 일부의 경우 이 옵션을 선택하면 중단이 발생할 수 있습니다.\n7. 확인 페이지에서 변경 내용을 검토합니다. 변경 내용이 정확할 경우 [DB 인스턴스 수정]을 선택하여 변경 내용을 저장합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/database-authentication.html\nhttps://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.Enabling.html\nhttps://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/USER_CreateDBInstance.html\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/iam-database-authentication.html",
    provider: "AWS",
  },
  {
    classification: "접근 관리",
    index: "RDS_002",
    risk: "중",
    name: "DB 스냅샷에 퍼블릭으로 액세스할 수 없는지 확인하시오",
    description:
      "DB snapshot visibility(DB 스냅샷 가시성)를 Public(퍼블릭)으로 설정한 경우 모든 AWS 계정은 수동 DB 스냅샷에서 DB 인스턴스를 복원하고 사용자 데이터에 액세스할 수 있습니다. 프라이빗 정보가 포함된 수동 DB 스냅샷을 Public(퍼블릭)으로 공유하지 마십시오.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 왼쪽 탐색 패널의 RDS 대시 보드에서 스냅샷을 클릭합니다.\n3. 수동 스냅샷으로부터 필터를 사용하여 수동 데이터베이스 스냅샷만 표시합니다..\n4. 검사할 스냅샷을 선택하십시오.\n5. 대시 보드 상단 메뉴에서 스냅샷 작업 버튼을 클릭하고 스냅샷 공유 옵션을 선택합니다.\n6. 관리 스냅샷 권한 페이지에서 DB 스냅 샷 가시성 설정을 확인합니다. 설정 값이 Public 으로 설정된 경우 선택한 Amazon RDS 데이터베이스 스냅샷에 공개적으로 액세스 할 수 있으므로 모든 AWS 계정과 사용자가 스냅 샷에서 사용 가능한 데이터에 액세스 할 수 있습니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후 Amazon RDS 콘솔을 엽니다.\n2. 탐색 창에서 [Snapshots]를 선택합니다.\n3. 공유할 수동 스냅샷을 선택합니다.\n4. 작업에서 스냅샷 공유를 선택합니다.\n5. DB 스냅샷 공개 여부를 Private(프라이빗)을 선택하여 지정한 AWS 계정만 수동 DB 스냅샷에서 DB 인스턴스를 복원하도록 허용합니다. (원본 DB 클러스터가 암호화되어 있는 경우 암호화된 스냅샷을 퍼블릭으로 공유할 수 없으므로 DB snapshot visibility(DB 스냅샷 가시성)는 Private으로 설정됩니다.)\n6. 수동 스냅샷에서 DB 인스턴스를 복원하도록 허용할 계정의 AWS 계정 식별자를 AWS 계정 ID에 에 입력한 다음 Add(추가)를 선택합니다.\n7. 수동 스냅샷을 복원할 수 있도록 허용할 모든 AWS 계정의 식별자를 추가한 후 [Save]를 선택하여 변경 내용을 저장합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/USER_ShareSnapshot.html\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/public-snapshots.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_003",
    risk: "중",
    name: "AWS RDS 리소스에 이벤트 알림이 활성화되어 있는지 확인하시오",
    description:
      "(* Cloud Conformity 기능)\nAmazon RDS는 Amazon RDS 이벤트 발생 시 Amazon Simple Notification Service(Amazon SNS)를 사용하여 알림 서비스를 제공합니다. 이 서비스는 AWS 리전에 따라 Amazon SNS가 지원하는 알림 메시지 형식에 따라 이메일, 문자 또는 HTTP 엔드포인트 호출 등이 될 수 있습니다.\nDB 인스턴스, DB 스냅샷, DB 파라미터 그룹, DB 보안 그룹 등의 이벤트가 발생했을 때 이에 대한 알림 메시지를 받을 수 있습니다.",
    inspection:
      '1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 아래에서 이벤트 구독을 클릭 합니다.\n3. RDS 이벤트 구독 페이지 에서 현재 사용 가능한 구독을 확인합니다. 이 페이지에 나열된 이벤트 구독이없고 대신 " No event subscriptions found. "메시지가 표시되는 경우 현재 리전에서 프로비저닝 된 Amazon RDS 리소스에 대해 이벤트 알림이 활성화되지 않은 것입니다.',
    action:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 아래에서 이벤트 구독을 클릭 합니다.\n3. 대시 보드 상단 메뉴에서 [이벤트 구독 생성] 버튼을 클릭합니다.\n4. 이름과 알림 전송 유형 및 대상, 소스 유형을 설정합니다.\n5. [생성]을 클릭하여 새 이벤트 구독을 만듭니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/RDS/notifications.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_004",
    risk: "중",
    name: "DB 보안 그룹 이벤트에 대해 RDS 이벤트 알림 구독이 활성화되어 있는지 확인하시오",
    description:
      "Amazon RDS는 Amazon RDS 이벤트 발생 시 Amazon Simple Notification Service(Amazon SNS)를 사용하여 알림 서비스를 제공합니다. 이 서비스는 AWS 리전에 따라 Amazon SNS가 지원하는 알림 메시지 형식에 따라 이메일, 문자 또는 HTTP 엔드포인트 호출 등이 될 수 있습니다.\nDB 인스턴스, DB 스냅샷, DB 파라미터 그룹, DB 보안 그룹 등의 이벤트가 발생했을 때 이에 대한 알림 메시지를 받을 수 있습니다.",
    inspection:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 아래에서 이벤트 구독을 클릭 합니다.\n3. RDS 이벤트 구독 페이지에서 이벤트 구독의 소스 유형이 보안 그룹으로 설정된 구독이 있는지 확인합니다.",
    action:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 아래에서 이벤트 구독을 클릭 합니다.\n3. 대시 보드 상단 메뉴에서 [이벤트 구독 생성] 버튼을 클릭합니다.\n4. 이름과 알림 전송 유형 및 대상을 설정합니다.\n5. 소스 유형에서 보안 그룹을 선택하고 포함할 보안 그룹, 포함할 이벤트 범주를 설정합니다.\n6. [생성]을 클릭하여 새 이벤트 구독을 만듭니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/RDS/rds-db-security-groups-events.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_005",
    risk: "중",
    name: "DB 인스턴스 수준 이벤트에 대해 RDS 이벤트 알림 구독이 활성화되어 있는지 확인하시오",
    description:
      "Amazon RDS는 Amazon RDS 이벤트 발생 시 Amazon Simple Notification Service(Amazon SNS)를 사용하여 알림 서비스를 제공합니다. 이 서비스는 AWS 리전에 따라 Amazon SNS가 지원하는 알림 메시지 형식에 따라 이메일, 문자 또는 HTTP 엔드포인트 호출 등이 될 수 있습니다.\nDB 인스턴스, DB 스냅샷, DB 파라미터 그룹, DB 보안 그룹 등의 이벤트가 발생했을 때 이에 대한 알림 메시지를 받을 수 있습니다.",
    inspection:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 아래에서 이벤트 구독을 클릭 합니다.\n3. RDS 이벤트 구독 페이지에서 이벤트 구독의 소스 유형이 인스턴스로 설정된 구독이 있는지 확인합니다.",
    action:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 아래에서 이벤트 구독을 클릭 합니다.\n3. 대시 보드 상단 메뉴에서 [이벤트 구독 생성] 버튼을 클릭합니다.\n4. 이름과 알림 전송 유형 및 대상을 설정합니다.\n5. 소스 유형에서 인스턴스를 선택하고 포함할 보안 그룹, 포함할 이벤트 범주를 설정합니다.\n6. [생성]을 클릭하여 새 이벤트 구독을 만듭니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/RDS/rds-instance-level-events.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_006",
    risk: "중",
    name: "RDS 인스턴스의 삭제 방지 기능이 활성화되어 있는지 확인하시오",
    description:
      "데이터베이스 인스턴스 또는 클러스터에 삭제 보호 기능이 구성되면, 사용자는 해당 데이터베이스를 삭제할 수 없습니다. 삭제 보호 기능은 모든 AWS 리전에서 Amazon Aurora 및 Amazon RDS for MySQL, MariaDB, Oracle, PostgreSQL 및 SQL Server 데이터베이스 인스턴스에 대해 제공됩니다.\nAWS 콘솔에서 삭제 보호 기능이 활성화된 데이터베이스 인스턴스의 삭제를 요청하면, 사용자가 차단되며 먼저 인스턴스를 수정하여 삭제 보호 기능을 비활성화하지 않는 한 계속할 수 없습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS Dashboard 에서 Instances를 클릭 합니다.\n3. 검사 할 RDS 인스턴스를 선택합니다.\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭 하고 세부 정보보기를 선택합니다 .\n5. 삭제 방지 상태를 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후 Amazon RDS 콘솔을 엽니다.\n2. 탐색 창에서 데이터베이스를 선택한 다음 변경하려는 DB 인스턴스를 선택합니다.\n3. [수정]을 선택합니다. [DB 인스턴스 수정] 페이지가 나타납니다.\n4. 삭제 방지를 활성화합니다.\n5. [계속]을 선택하고 수정 사항 요약을 확인합니다.\n(6) 즉시 적용을 선택하여 변경 내용을 즉시 적용합니다. 일부의 경우 이 옵션을 선택하면 중단이 발생할 수 있습니다.\n7. 확인 페이지에서 변경 내용을 검토합니다. 변경 내용이 정확할 경우 [DB 인스턴스 수정]을 선택하여 변경 내용을 저장합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/RDS/instance-deletion-protection.html\nhttps://aws.amazon.com/ko/about-aws/whats-new/2018/09/amazon-rds-now-provides-database-deletion-protection/",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_007",
    risk: "중",
    name: "RDS 인스턴스가 고가용성 및 자동 장애 조치 지원을 위해 다중 AZ 배포 구성을 사용하고 있는지 확인하시오",
    description:
      "Amazon RDS 다중 AZ 배포는 RDS 데이터베이스(DB) 인스턴스를 위해 향상된 가용성 및 내구성을 제공합니다. 다중 AZ DB 인스턴스를 프로비저닝하면 Amazon RDS는 자동으로 하나의 기본 DB 인스턴스를 생성하고 동시에 다른 가용 영역(AZ)의 예비 인스턴스에 데이터를 복제합니다. 인프라 장애가 발생하더라도 Amazon RDS가 예비 인스턴스(또는 Amazon Aurora의 경우 읽기 전용 복제본)로 자동 장애 조치를 수행하여 장애 조치 완료 후 데이터베이스 작업을 바로 재개할 수 있습니다. 장애 조치 후에도 DB 인스턴스의 엔드포인트는 그대로 유지되므로 관리자가 직접 개입할 필요 없이 애플리케이션에서 데이터베이스 작업을 재개할 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS Dashboard 에서 Instances를 클릭 합니다.\n3. 검사 할 RDS 인스턴스를 선택합니다.\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭 하고 세부 정보보기를 선택합니다 .\n5. 다중 AZ 배포 상태를 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후 Amazon RDS 콘솔을 엽니다.\n2. 탐색 창에서 데이터베이스를 선택한 다음 변경하려는 DB 인스턴스를 선택합니다.\n3. [수정]을 선택합니다. [DB 인스턴스 수정] 페이지가 나타납니다.\n4. 다중 AZ 배포를 대기 인스턴스 생성으로 선택합니다.\n5. [계속]을 선택하고 수정 사항 요약을 확인합니다.\n(6) 즉시 적용을 선택하여 변경 내용을 즉시 적용합니다. 일부의 경우 이 옵션을 선택하면 중단이 발생할 수 있습니다.\n7. 확인 페이지에서 변경 내용을 검토합니다. 변경 내용이 정확할 경우 [DB 인스턴스 수정]을 선택하여 변경 내용을 저장합니다.",
    reference:
      "https://aws.amazon.com/ko/rds/features/multi-az/\nhttps://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/Overview.DBInstance.Modifying.html\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/rds-multi-az.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_008",
    risk: "중",
    name: "RDS 인스턴스에 Storage AutoScaling 기능이 활성화되어 있는지 확인하시오",
    description:
      "워크로드가 예측할 수 없는 경우에는 Amazon RDS DB 인스턴스에서 스토리지 Autoscaling을 활성화할 수 있습니다. 스토리지 Autoscaling이 활성화된 상태에서 Amazon RDS가 데이터베이스의 여유 공간이 부족한 것을 감지하면 자동으로 스토리지를 확장합니다. Amazon RDS는 다음과 같은 요인이 적용될 때 Autoscaling이 활성화된 DB 인스턴스에서 스토리지 수정을 시작합니다.\n- 사용 가능한 여유 공간이 할당 된 인스턴스 스토리지의 10 % 미만인 경우\n- 낮은 저장 상태는 최소 5 분 동안 지속된 경우\n- 마지막 스토리지 수정 이후 최소 6 시간이 지난 경우\n추가 스토리지는 다음 중 더 큰 값만큼 증가합니다.\n- 5GiB\n- 현재 할당된 스토리지의 10퍼센트\n- 지난 시간 동안의 FreeStorageSpace 지표 변화에 따라 7시간의 스토리지 증가 예측 지표",
    inspection:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동 합니다.\n2. 탐색 패널의 Amazon RDS 에서 데이터베이스를 클릭 합니다.\n3. 검사 할 RDS 데이터베이스 인스턴스를 선택하고 DB 식별자 열에 있는 리소스 이름을 클릭합니다 .\n4. 인스턴스 세부 정보 페이지에서 구성 탭을 선택 하고 스토리지 섹션 에서 사용할 수 있는 스토리지 자동 확장 구성 속성 값을 확인합니다 . 속성 값이 Disabled 로 설정 되면 선택한 Amazon RDS 데이터베이스 인스턴스에 대해 RDS Storage AutoScaling 기능이 활성화되지 않은 것입니다.",
    action:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동 합니다.\n2. 탐색 패널의 Amazon RDS 에서 데이터베이스를 클릭 합니다.\n3. 재구성하려는 RDS 데이터베이스 인스턴스를 선택합니다.\n4. RDS 대시 보드 상단 메뉴에서 수정 버튼을 클릭 합니다.\n5. <인스턴스 식별자> 페이지 내에서 스토리지 오토스케일링을 활성화하고, 최대 저장 임계 값에 선택한 데이터베이스 인스턴스의 계획된 작업 부하에 필요한 최대 저장 임계 값을 입력합니다.\n6. 계속 을 클릭 하고 수정 요약 섹션에서 인스턴스에 적용 할 구성 변경 사항을 확인합니다.\n7. 예약 된 다음 유지 관리 기간 동안 변경 사항을 자동으로 적용 하려면 다음 예약 된 유지 관리 기간 동안 적용을 선택하거나 즉시 적용하려면 즉시 적용을 선택합니다 .  \n8. 인스턴스 수정을 클릭 하여 구성 변경 사항을 적용합니다. ",
    reference:
      "https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/enable-rds-storage-autoscaling.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_009",
    risk: "중",
    name: "디스크 공간이 부족한 것으로 보이는 RDS DB 인스턴스를 식별하고 이를 확장하는지 확인하시오",
    description:
      "I/O 크레딧 밸런스의 고갈로 인해 스토리지 성능이 종종 기본 수준으로 제한됩니다. 그렇다면, 더 높은 기준 성능 수준의 범용 SSD 추가 할당을 고려하십시오. 또는 IOPS 성능을 유지해야 하는 워크로드인 경우에는 Provisioned IOPS 스토리지로 전환하는 것도 좋습니다.",
    inspection:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 섹션에서 인스턴스를 선택합니다 .\n3. 검사할 RDS 데이터베이스 인스턴스를 선택합니다.\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭 하고 세부 정보보기를 선택합니다 .\n5. 세부 정보 탭에서 인스턴스와 IOPS 섹션에서 스토리지 기가 바이트에서 선택한 데이터베이스 인스턴스에 할당 된 스토리지의 양을 얻을 수 속성 값을 확인합니다.\n6. RDS 대시 보드로 돌아가서 검사 할 데이터베이스 인스턴스를 다시 선택합니다.\n7. 대시 보드 상단 메뉴에서 Show Monitoring 버튼을 클릭하고 Show Multi-Graph View 를 선택 하여 AWS CloudWatch 모니터링 패널을 확장합니다.\n8. 선택한 인스턴스에 대해 표시된 모니터링 패널에서 여유 스토리지 공간 사용량 그래프 축소판을 클릭하여 RDS 인스턴스 여유 스토리지 공간 세부 정보 상자를 엽니다. 내부 무료 저장 공간 (MB) 대화 상자에서 다음 매개 변수를 설정합니다.\n- 통계 목록에서 최대\n- 시간 목록에서 24시간\n- 기간 목록에서  1시간\n9. 모니터링 데이터가로드되면 선택한 데이터베이스 인스턴스에 대해 현재 사용 가능한 여유 스토리지 공간 (MB)을 확인합니다.\n10. 사용 가능한 스토리지 공간의 양이 10 % 이하인 경우 선택한 AWS RDS 데이터베이스 인스턴스의 디스크 공간이 충분하지 않아 최적으로 수행할 수 없으므로 인스턴스 스토리지 공간을 확장하는 것이 좋습니다.",
    action:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 섹션에서 인스턴스를 선택합니다 .\n3. 재구성하려는 RDS 데이터베이스 인스턴스를 선택합니다 .\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭하고 수정을 선택 합니다.\n5. <인스턴스 식별자> 페이지에서 할당된 스토리지에 새로운 값을 입력하여 기존 스토리지 공간을 늘립니다.\n6. 페이지 하단에서 즉시 적용을 선택하여 할당 된 스토리지 변경 사항을 즉시 적용합니다.\n7. 계속 을 클릭하여 변경 사항을 검토하고 Modify DB Instance 를 클릭합니다. 크기 조정 프로세스 중에 인스턴스 상태가 사용 가능 에서 수정 중으로 변경 되고 다시 사용 가능 으로 변경 되어야 합니다 (데이터베이스 인스턴스 크기 및 구성에 따라 몇 분 정도 소요될 수 있음). 확장 프로세스가 완료되면 세부 정보 패널에서 RDS 인스턴스 스토리지 크기를 업데이트해야합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/CHAP_Storage.html\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/free-storage-space.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_010",
    risk: "중",
    name: "RDS 인스턴스가 범용 SSD를 사용하고 있는지 확인하시오",
    description:
      "Amazon RDS에서는 범용 SSD(gp2라고도 함), 프로비저닝된 IOPS SSD(io1이라고도 함), 마그네틱(표준이라고도 함) 등 세 가지 스토리지 유형을 제공합니다. 범용 SSD 볼륨은 광범위한 워크로드에 이상적인 비용 효율적 스토리지를 제공합니다. 이러한 볼륨은 시간을 연장할 경우 3,000IOPS의 버스트 기능까지 지원되어 지연 시간이 한 자릿수 밀리초에 불과합니다. 이러한 볼륨에 대한 기준 성능은 볼륨의 크기에 의해 결정됩니다. 따라서 범용 SSD를 권장합니다.",
    inspection:
      "AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 아래에서 인스턴스를 클릭 합니다.\n3. 검사할 RDS 인스턴스를 선택합니다.\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭 하고 세부 정보보기를 선택합니다 .\n5. 세부 정보 탭에서 인스턴스와 IOPS 섹션에서 확인 스토리지 유형의 속성 값이 프로비저닝 된 IOPS (SSD)로 설정되어 있는지 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 아래에서 인스턴스를 클릭 합니다.\n3. 수정하려는 RDS 인스턴스를 선택합니다.\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭 하고 스냅 샷 생성을 선택 하여 데이터베이스 스냅 샷 (백업)을 생성합니다.\n5. 테이크 DB 스냅 샷 페이지에서의 스냅 샷 이름 상자, 클릭 한 다음 데이터베이스 백업에 대한 고유 한 이름을 입력 스냅 샷 찍기 요청을 보낼 수 있습니다.\n6. 인스턴스 페이지로 돌아가서 수정할 RDS 인스턴스를 다시 선택합니다.\n7. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭 하고 수정을 선택 합니다.\n8. <인스턴스 식별자> 페이지에서 저장 유형을 일반 용도의 SSD 로 설정합니다.\n9. 할당 된 스토리지를 IOPS 번호와 맞추는데 필요한 인스턴스 스토리지 크기를 GB 단위로 입력합니다.\n페이지 하단에서 즉시 적용 확인란을 선택 하여 스토리지 유형 변경 사항을 즉시 적용합니다.\n10계속 버튼을 클릭하고 스토리지 유형 변경 사항을 검토하고 Modify DB Instance를 클릭합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/CHAP_Storage.html\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/general-purpose-ssd-storage-type.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_011",
    risk: "중",
    name: "RDS 인스턴스가 Data-tier를 위한 보안그룹을 사용하도록 구성되어 있는지 확인하시오.",
    description:
      "애플리케이션 DB 인스턴스가 데이터 계층 보안 그룹을 사용하도록 구성되어 있는지 확인합니다.\n관리형 데이터 계층에 대한 네트워크 액세스는 RDS용 보안 그룹과 DB 인스턴스의 비 로컬 액세스 가능성을 사용하여 엄격하게 제어되어야 합니다.",
    inspection:
      "AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 아래에서 인스턴스를 클릭 합니다.\n3. 검사할 RDS 인스턴스를 선택합니다.\n4. 보안&연결 탭에서 보안의 VPC 보안 그룹이 data-tier에 알맞는 보안 그룹으로 연결되어 있는지 확인합니다.",
    action:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 섹션에서 인스턴스를 선택합니다 .\n3. 재구성하려는 RDS 데이터베이스 인스턴스를 선택합니다 .\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭하고 수정을 선택합니다.\n5. <연결> 페이지의 보안 그룹에서 data-tier에 알맞는 보안 그룹으로 선택합니다.\n6. 페이지 하단에서 즉시 적용을 선택하여 보안 그룹 변경 사항을 즉시 적용합니다.\n7. 계속 을 클릭하여 변경 사항을 검토하고 DB 인스턴스 수정을 클릭합니다. ",
    reference:
      "https://d1.awsstatic.com/whitepapers/compliance/CIS_Amazon_Web_Services_Three-tier_Web_Architecture_Benchmark.pdf",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_012",
    risk: "중",
    name: "과도하게 사용되는 것으로 보이는 RDS DB 인스턴스를 식별하고 업그레이드하는지 확인하시오",
    description:
      "지난 14일 동안 실행된 적이 있는 Amazon Elastic Compute Cloud(EC2) 인스턴스를 점검하고, 4일 이상 일일 CPU 사용률이 90%를 넘은 경우 알립니다. 사용률이 일관되게 높다는 것은 성능이 최적화되어 있고 안정적임을 나타낼 수 있지만 애플리케이션의 리소스가 충분하지 않다는 의미일 수도 있습니다.",
    inspection:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다.\n2. 탐색 패널의 RDS 대시 보드 섹션에서 데이터베이스를 선택합니다 .\n3. 검사 할 RDS 데이터베이스 인스턴스를 선택합니다.\n4. 대시 보드 상단 메뉴에서 모니터링 탭을 클릭 합니다.\n5. 선택한 인스턴스에 대해 표시된 모니터링 패널에서 CPU 사용률 (백분율) 사용량 그래프 축소판을 클릭 하여 RDS 인스턴스 CPU 사용량 지표 세부 정보 상자를 엽니 다. 내부 CPU 사용률 (퍼센트) 대화 상자에서 다음 매개 변수를 설정합니다.\n- 통계 목록에서 보통\n- 시간 목록에서 지난 1주\n- 기간 목록에서 하루\n6. 모니터링 데이터가 로드되면 지난 14일 동안의 인스턴스 CPU 사용량을 확인합니다. 평균 사용량 (퍼센트)이 90 % 이상인지 확인합니다.",
    action:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다.\n2. 탐색 패널의 RDS 대시 보드 섹션에서 데이터베이스를 선택합니다 .\n3. 크기를 조정하려는 남용 된 RDS 데이터베이스 인스턴스를 선택합니다.\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭하고 수정을 선택 합니다.\n5. <인스턴스 식별자> 페이지에서 인스턴스 사양 섹션에서 (예를 들어 db.m4.xlarge)로 업그레이드 할 데이터베이스 인스턴스 유형을 선택합니다.\n6. 페이지 하단에서 즉시 적용을 선택하여 인스턴스 유형 (클래스) 변경 사항을 즉시 적용합니다.\n7. 계속 을 클릭 하여 데이터베이스 인스턴스 검토 페이지에 액세스하십시오.\n8. 유형 / 클래스 변경 사항을 검토 한 다음 Modify DB Instance 를 클릭 합니다. 크기 조정 프로세스 중에 인스턴스 상태는 사용 가능에서 수정 중으로 변경 되고 다시 사용 가능으로 변경 되어야 합니다 (데이터베이스 인스턴스 구성에 따라 몇 분 정도 걸릴 수 있음). 크기 조정 프로세스가 완료되면 세부 정보 패널에서 RDS 인스턴스 유형을 업데이트해야합니다.",
    reference:
      "https://aws.amazon.com/ko/premiumsupport/technology/trusted-advisor/best-practice-checklist/\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/overutilized-rds-instance.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_013",
    risk: "중",
    name: "Amazon RDS의 암호를 자동으로 교체하도록 AWS Secrets Manager를 구성하는지 확인하시오",
    description:
      "Amazon RDS 보안 암호를 자동으로 교체할 수 있도록 AWS Secrets Manager를 구성합니다. \nAWS Secrets Manager를 사용하면 수명 주기에 걸쳐 데이터베이스 자격 증명, API 키 및 다른 보안 정보를 손쉽게 교체, 관리 및 검색할 수 있습니다. AWS Secrets Manager는 코드 배포 없이 보안 정보를 안전하게 교체할 수 있도록 지원하므로, 보안 및 규정 준수 요구 사항을 충족하는 데 도움이 됩니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후  AWS Secrets Manager로 이동합니다 .\n2. 확인할 보안 암호를 클릭합니다.\n3. 보안 암호 값의 arn이 해당 RDS DB 인스턴스인지 확인합니다.",
    action:
      "1. Amazon RDS에서 데이터베이스를 생성합니다.\n2. Secrets Manager 콘솔을 사용하여 암호를 만들고 데이터베이스의 초기 사용자 이름과 암호로 암호를 채웁니다. 반환된 자격 증명을 사용하여 데이터베이스에 로그인하여 암호를 테스트합니다.\n3. 새 암호를 사용하여 자격 증명을 테스트하고 이를 사용하여 데이터베이스에 연결할 수 있는지 확인합니다.\n4. 암호 순환을 활성화하고 초기 순환을 수행합니다.\n5. 초기 순환이 완료된 후 유효성 검사 단계를 반복하여 순환 중에 생성 된 새 자격 증명이 계속해서 데이터베이스에 액세스 할 수 있음을 보여줍니다.\n6. 불필요한 비용이 발생하지 않도록 Amazon RDS 데이터베이스 인스턴스와 암호를 제거합니다.",
    reference:
      "https://aws.amazon.com/ko/secrets-manager/\nhttps://docs.aws.amazon.com/ko_kr/secretsmanager/latest/userguide/rotating-secrets.html\nhttps://docs.aws.amazon.com/secretsmanager/latest/userguide/tutorials_db-rotate.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_014",
    risk: "중",
    name: "RDS 프로덕션 DB가 사용된 RDS DB 엔진 유형의 마스터 사용자 이름을 기본값으로 사용하지 않았는지 확인하시오",
    description:
      "* 근거 부족 (Cloud Conformity)\n'awsuser'가 RDS 데이터베이스 마스터 사용자 이름에 대한 Amazon의 예 (기본값)이므로 많은 AWS 고객이 프로덕션의 RDS 데이터베이스에이 사용자 이름을 사용하므로 악의적인 사용자가 이 정보를 유리하게 사용하고 'awsuser'를 자주 사용하려고 할 수 있습니다. 대신 고유한 영숫자 문자열을 마스터 사용자의 로그인 ID로 정의해야합니다.",
    inspection:
      '1. AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS 대시 보드 아래에서 인스턴스를 클릭 합니다.\n3. 검사할 RDS 인스턴스를 선택합니다.\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭 하고 세부 정보보기를 선택합니다 .\n5. 세부 정보 탭에서 구성 세부 사항 섹션에서 사용자 이름 속성 값이 "awsuser"로 설정되어 있는지 확인합니다.',
    action:
      "1. AWS Management 콘솔에 로그인한 후  Amazon RDS 콘솔을 엽니다.\n2. AWS Management 콘솔 콘솔의 오른쪽 상단 모서리에서 DB 인스턴스를 생성하려는 AWS 리전을 선택합니다.\n3. 탐색 창에서 데이터베이스를 선택합니다.\n4. 데이터베이스 생성을 선택하십시오.\n5. 데이터베이스 생성 페이지에서 Standard Create(표준 생성) 옵션이 선택되어 있는지 확인하고 종류를 선택합니다.  \n6. 설정 섹션에서 마스터 사용자 이름을 'awsuser'가 아닌 고유 이름을 입력합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateDBInstance.html\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/rds-master-username.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_015",
    risk: "중",
    name: "DB 인스턴스에서 SSL/TLS 연결을 사용하는지 확인하시오",
    description:
      "SQL Server 및 PostgreSQL 인스턴스에 대한 모든 연결은 기본적으로 강제 SSL 파라미터를 활성화하는 RDS 전송 암호화 기능에서 제공하는 암호화를 사용해야합니다.\n애플리케이션에서 SSL(Secure Socket Layer) 또는 TLS(전송 계층 보안)를 사용하여 MySQL, MariaDB, SQL Server, Oracle, PostgreSQL을 실행하는 DB 인스턴스에 대한 연결을 암호화할 수 있습니다.",
    inspection:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 왼쪽 탐색 패널의 Amazon RDS 에서 인스턴스를 클릭 합니다.\n3. 검사 할 RDS SQL Server 또는 PostgreSQL 인스턴스를 선택합니다. 프로비저닝 된 각 인스턴스에서 사용하는 데이터베이스 엔진의 유형은 엔진 열 에서 사용할 수 있어야합니다 .\n4. 인스턴스를 선택하고 구성 탭으로 이동합니다 .\n5.  인스턴스 섹션에서 파라미터 그룹의 속성을 찾아 이동합니다.\n6. 매개 변수 목록 페이지에서 rds.force_ssl의 값을 확인합니다 . 파라미터 값이 0 으로 설정되면 SQL Server 인스턴스에 대한 클라이언트 연결이 SSL을 사용하지 않으므로 선택한 AWS RDS 데이터베이스 인스턴스에 대해 전송 암호화 기능이 활성화되지 않습니다.",
    action:
      "[PostgresDB, SQLDB]\n1. AWS Management 콘솔에 로그인한 후 Amazon RDS 콘솔을 엽니다.\n2. 탐색 창에서 파라미터 그룹을 선택합니다.\n3. 목록에서 수정할 파라미터 그룹을 선택합니다.\n4. 파라미터 그룹 작업에서 편집을 선택합니다.\n5. rds.force_ssl의 값을 1로 변경합니다. \n6. Save changes(변경 사항 저장)를 선택합니다.\n\n\n[OracleDB] 옵션그룹에 SSL 옵션을 추가, FIPS.SSLFIPS_140의 값을 True로 변경합니다.\n[MariaDB] 10.2 이상 및 10.0과 10.1의 최신 마이너 버전의 경우, SSL 지원X, 2번과 같은 방법으로 확인\n[MySQLDB] SSL 지원X, 2번과 같은 방법으로 확인.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/RDS/transport-encryption.html",
    provider: "AWS",
  },
  {
    classification: "서비스 관리",
    index: "RDS_016",
    risk: "중",
    name: "DB 인스턴스에 TLS 1.1 이상을 사용하는지 확인하시오",
    description:
      "AWS 게시 API 작업을 사용하면 네트워크를 통해 Amazon RDS에 액세스할 수 있습니다. 클라이언트가 TLS(전송 계층 보안) 1.0을 지원해야 합니다. TLS 1.2를 권장합니다. ",
    inspection:
      "1. AWS Management Console에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 왼쪽 탐색 패널의 Amazon RDS 에서 인스턴스를 클릭 합니다.\n3. 검사 할 RDS SQL Server 또는 PostgreSQL 인스턴스를 선택합니다. 프로비저닝 된 각 인스턴스에서 사용하는 데이터베이스 엔진의 유형은 엔진 열 에서 사용할 수 있어야합니다 .\n4. 인스턴스를 선택하고 구성 탭으로 이동합니다 .\n5.  인스턴스 섹션에서 파라미터 그룹의 속성을 찾아 이동합니다.\n6. 매개 변수 목록 페이지에서 tls_version의 값이 TLSv1.1 이상으로 설정되어 있는지 확인합니다.",
    action:
      "[MySQL, Maria]\n1. AWS Management 콘솔에 로그인한 후 Amazon RDS 콘솔을 엽니다.\n2. 탐색 창에서 파라미터 그룹을 선택합니다.\n3. 목록에서 수정할 파라미터 그룹을 선택합니다.\n4. 파라미터 그룹 작업에서 편집을 선택합니다.\n5. tls_version의 값을 TLSv1.1 또는 TLSv1.2로 변경합니다. \n6. Save changes(변경 사항 저장)를 선택합니다.\n\n[SQL] rds.tls11, rds.tls12의 값을 enabled로 변경합니다. (rds.tls10은 disabled 해야하나...)\n\n[Postgres] ssl_min_protocol_version의 값을 TLSv1.1 또는 TLSv1.2로 변경합니다.\n\n[OracleDB] 옵션그룹에 SSL 옵션을 추가, SQLNET.SSL_VERSION의 값을 1.2로 변경합니다.",
    reference:
      "https://www.cloudconformity.com/knowledge-base/aws/RDS/transport-encryption.html",
    provider: "AWS",
  },
  {
    classification: "로그 관리",
    index: "RDS_017",
    risk: "중",
    name: "DB 인스턴스에 로그 내보내기 기능이 활성화되어 있는지 확인하시오",
    description:
      "CloudWatch 로그에 게시하면 MySQL 및 MariaDB용 RDS의 데이터베이스 활동, 쿼리 성능 및 오류에 대한 지속적인 가시성을 유지할 수 있습니다.\nAmazon CloudWatch Logs를 사용하면 애플리케이션의 다양한 구성 요소의 로그를 중앙에서 안정적으로 저장할 수 있습니다. 또한 특정 구문, 값 또는 패턴 (메트릭)에 대해 거의 실시간으로 로그를 모니터링 할 수 있습니다. 또한 모니터링되는 조건이 발생할 때 경고하는 경보를 설정할 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS Dashboard 에서 인스턴스를 클릭 합니다.\n3. 검사 할 RDS 인스턴스를 선택합니다.\n4. 구성 탭에서 게시된 로그 구역의 CloudWatch Logs 항목을 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후 Amazon RDS 콘솔을 엽니다.\n2. 탐색 창에서 데이터베이스를 선택한 다음 변경하려는 DB 인스턴스를 선택합니다.\n3. [수정]을 선택합니다. [DB 인스턴스 수정] 페이지가 나타납니다.\n4. 로그 내보내기에서  내보낼 로그 유형을 선택합니다.\n5. [계속]을 선택하고 수정 사항 요약을 확인합니다.\n(6) 즉시 적용을 선택하여 변경 내용을 즉시 적용합니다. 일부의 경우 이 옵션을 선택하면 중단이 발생할 수 있습니다.\n7. 확인 페이지에서 변경 내용을 검토합니다. 변경 내용이 정확할 경우 [DB 인스턴스 수정]을 선택하여 변경 내용을 저장합니다.",
    reference:
      "https://aws.amazon.com/ko/about-aws/whats-new/2018/01/now-publish-log-files-from-amazon-rds-for-mysql-and-mariadb-to-amazon-cloudwatch-logs/\nhttps://aws.amazon.com/ko/blogs/database/monitor-amazon-rds-for-mysql-and-mariadb-logs-with-amazon-cloudwatch/\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/log-exports.html",
    provider: "AWS",
  },
  {
    classification: "백업 관리",
    index: "RDS_018",
    risk: "중",
    name: "RDS DB 인스턴스가 최소 백업 보존 기간을 설정했는지 확인하시오",
    description:
      "백업 보존 기간을 설정하지 않으면 Amazon RDS API 또는 AWS CLI를 사용하여 DB 인스턴스를 생성하는 경우 기본 백업 보존 기간은 1일입니다. 콘솔을 사용하여 DB 인스턴스를 생성하는 경우 기본 백업 보존 기간은 7일입니다. DB 인스턴스를 생성한 후 백업 보존 기간을 수정할 수 있습니다. 백업 보존 기간은 1일에서 35일 사이로 설정할 수 있습니다. 백업 보존 기간을 0으로 설정하면 자동 백업이 비활성화됩니다.\n기본적으로 Amazon RDS는 DB 인스턴스를 자동으로 백업합니다. 이때 보존 기간은 7일입니다. ",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS Dashboard 에서 Instances를 클릭 합니다.\n3. 검사 할 RDS 인스턴스를 선택합니다.\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭 하고 세부 정보보기를 선택합니다 .\n5. 백업 보존 기간을 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후 Amazon RDS 콘솔을 엽니다.\n2. 탐색 창에서 데이터베이스를 선택한 다음 변경하려는 DB 인스턴스를 선택합니다.\n3. [수정]을 선택합니다. [DB 인스턴스 수정] 페이지가 나타납니다.\n4. 백업 보존 기간을 0이 아닌 상수로 수정합니다.\n5. [계속]을 선택하고 수정 사항 요약을 확인합니다.\n(6) 즉시 적용을 선택하여 변경 내용을 즉시 적용합니다. 일부의 경우 이 옵션을 선택하면 중단이 발생할 수 있습니다.\n7. 확인 페이지에서 변경 내용을 검토합니다. 변경 내용이 정확할 경우 [DB 인스턴스 수정]을 선택하여 변경 내용을 저장합니다.",
    reference:
      "https://aws.amazon.com/ko/rds/faqs/\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/rds-sufficient-backup-retention-period.html",
    provider: "AWS",
  },
  {
    classification: "백업 관리",
    index: "RDS_019",
    risk: "중",
    name: "MySQL 호환성 데이터베이스 클러스터가있는 Amazon Aurora에 역 추적 기능이 활성화되어 있는지 확인하시오",
    description:
      "MySQL과 호환되는 Amazon Aurora에서는 백업에서 데이터를 복구하지 않고도 특정 시간으로 DB 클러스터를 되감을 수 있습니다.\n기존의 백업 및 복원에 비해 실수를 쉽게 실행 취소할 수 있고, DB 클러스터를 빠르게 역추적할 수 있으며, 이전 데이터 변경 사항을 확인할 수 있다는 장점이 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS Dashboard 에서 Instances를 클릭 합니다.\n3. 검사 할 RDS 인스턴스를 선택합니다.\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭 하고 세부 정보보기를 선택합니다 .\n5. 역 추적 상태를 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후 Amazon RDS 콘솔을 엽니다.\n2. Amazon RDS 콘솔의 오른쪽 위 모서리에서 DB 인스턴스를 생성하려는 AWS 리전(Aurora를 사용가능한 리전)을 선택합니다.\n3. 탐색 창에서 데이터베이스를 선택합니다.\n4. 데이터베이스 생성을 선택하십시오.\n5. Choose a database creation method(데이터베이스 생성 방법 선택)에서 Standard Create(표준 생성)를 선택합니다.\n6. Engine options(엔진 옵션)에서 Amazon Aurora를 선택합니다. \t\t\t\n7. 에디션과 데이터베이스 기능, 템플릿을 선택합니다.\n8. 마스터 암호를 입력합니다.\n9. Backtrack 설정을 [Enable Backtrack]으로 선택하고 Target Backtrack window(대상 역추적 기간) 값을 0보다 큰 값으로 지정합니다.\n10. 데이터베이스 생성을 선택하십시오.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/AuroraUserGuide/AuroraMySQL.Managing.Backtrack.html\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/backtrack.html",
    provider: "AWS",
  },
  {
    classification: "백업 관리",
    index: "RDS_020",
    risk: "중",
    name: "RDS DB 인스턴스의 스냅샷을 Amazon Backup 서비스를 사용해 관리하는지 확인하시오.",
    description:
      "AWS Backup을 사용하면 AWS 서비스에 대한 데이터 보호를 중앙 집중화하고 자동화할 수 있습니다. AWS Backup은 백업할 AWS 리소스를 구성 및 감사하고, 백업 일정을 자동화하고, 보존 정책을 설정하고, 모든 최신 백업 및 복원 활동을 모니터링할 수 있는 중앙 위치를 제공하므로 AWS 스토리지 볼륨, 데이터베이스 및 파일 시스템을 간단하게 보호할 수 있습니다. 현재 여러 AWS 서비스에서 EBS 스냅샷, RDS 스냅샷, Amazon FSx 백업, DynamoDB 백업 및 Storage Gateway 스냅샷과 같은 백업 기능을 제공하여 데이터를 보호할 수 있도록 지원하고 있습니다.",
    inspection:
      "1. AWS Management Console에 로그인한후 RDS 대시 보드로 이동합니다 .\n2. 왼쪽 탐색 패널의 Amazon RDS 에서 스냅 샷을 클릭 합니다.\n3. 스냅 샷 목록 페이지에서 백업 서비스 선택하여 AWS 백업 서비스에 의해 처리된 스냅샷을 확인합니다.",
    action:
      "1. AWS Management Console에 로그인한 후 AWS Backup 대시 보드로 이동합니다.\n2. 왼쪽 탐색 패널에서 백업 계획을 선택합니다 .\n3. 대시 보드 상단 메뉴에서 백업 계획 생성 버튼을 클릭 하여 백업 계획 설정 프로세스를 시작합니다.\n4. 백업 계획 생성 페이지에서 템플릿을 선택하고, 이름을 입력합니다.\n5. 생성된 백업 계획 페이지 내에서 리소스 할당의 [리소스 할당]을 선택합니다.\n6. 리소스 할당 이름, IAM 할당의 태그, 키, 값을 입력합니다.\n7. 기준을 리소스 ID, 리소스 유형을 RDS로 설정하고 데이터베이스 이름을 선택합니다.\n8. [리소스 할당]을 눌러 저장하면 RDS 인스턴스가 일일 스냅샷을 만들고 생성한 백업 계획에 기반하여 스냅샷을 관리합니다.",
    reference:
      "https://aws.amazon.com/ko/backup/faqs/\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/in-use-for-rds.html",
    provider: "AWS",
  },
  {
    classification: "패치 관리",
    index: "RDS_021",
    risk: "중",
    name: "RDS 인스턴스의 자동 마이너 업그레이드 기능을 활성화되어 있는지 확인하시오",
    description:
      "Amazon RDS가 데이터베이스의 DB 엔진 버전을 자동으로 업그레이드하도록 하려면 데이터베이스에 대해 마이너 버전 업그레이드를 활성화하면 됩니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS Dashboard 에서 Instances를 클릭 합니다.\n3. 검사 할 RDS 인스턴스를 선택합니다.\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭 하고 세부 정보보기를 선택합니다 .\n5. 유지 관리 세부 사항 섹션에서 검색 자동 마이너 버전 업그레이드 상태를 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후 Amazon RDS 콘솔을 엽니다.\n2. 탐색 창에서 데이터베이스를 선택한 다음 변경하려는 DB 인스턴스를 선택합니다.\n3. [수정]을 선택합니다. [DB 인스턴스 수정] 페이지가 나타납니다.\n4. 유지 관리에서 마이너 버전 자동 업그레이드 사용을 선택합니다.\n5. [계속]을 선택하고 수정 사항 요약을 확인합니다.\n(6) 즉시 적용을 선택하여 변경 내용을 즉시 적용합니다. 일부의 경우 이 옵션을 선택하면 중단이 발생할 수 있습니다.\n7. 확인 페이지에서 변경 내용을 검토합니다. 변경 내용이 정확할 경우 [DB 인스턴스 수정]을 선택하여 변경 내용을 저장합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Upgrading.html\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/rds-auto-minor-version-upgrade.html",
    provider: "AWS",
  },
  {
    classification: "패치 관리",
    index: "RDS_022",
    risk: "중",
    name: "프로비저닝 된 모든 RDS 데이터베이스 인스턴스가 최신 세대의 인스턴스 클래스를 사용하고 있는지 확인하시오",
    description:
      "AWS는 이전 세대 인스턴스에 맞게 애플리케이션을 최적화했으나 아직 업그레이드하지 못한 사용자를 위해 이전 세대 DB 인스턴스를 제공합니다. 최신 세대 인스턴스를 사용하면 더 나은 성능, 비용, 지원 등의 이점이 있으므로 이전 세대를 사용하는 경우 업그레이드를 권장합니다.\n(이전 세대의 종류는 AWS docs 참조)",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후 EC2 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS Dashboard 에서 인스턴스를 클릭 합니다.\n3. 검사 할 RDS 인스턴스를 선택합니다.\n5. 구성 탭의 인스턴스 클래스 섹션에서 인스턴스 클래스 값을 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후 EC2 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS Dashboard 에서 인스턴스를 클릭 합니다.\n3. 업그레이드 할 RDS 인스턴스를 선택합니다.\n4. 대시 보드 상단 메뉴에서 인스턴스 작업 버튼을 클릭 하고 수정을 선택 합니다.\n5. <인스턴스 식별자> 페이지에서 인스턴스 사양 섹션에서 이전 세대 클래스가 아닌 것을 설정합니다.\n6. 페이지 하단에서 즉시 적용을 선택하여 인스턴스 클래스 변경 사항을 즉시 적용합니다.\n7. 계속을 클릭한 뒤 변경 사항을 검토하고 Modify DB Instance를 클릭 합니다. 업그레이드 프로세스 중에 인스턴스 상태가 사용 가능에서 수정 중으로 변경되고 다시 사용 가능으로 변경되어야합니다 (인스턴스 구성에 따라 몇 분 정도 소요될 수 있음). 업그레이드가 완료되면 세부 정보 페이지에서 인스턴스 유형을 업데이트해야합니다.",
    reference:
      "https://aws.amazon.com/ko/rds/previous-generation/\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/db-instance-generation.html",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "RDS_023",
    risk: "하",
    name: "AES-256 수준 암호화를 사용하여 RDS 인스턴스의 암호화를 보장하는지 확인하시오",
    description:
      "Amazon RDS 암호화를 사용해 DB 인스턴스와 저장된 스냅샷을 보호합니다. Amazon RDS 암호화는 업계 표준 AES-256 암호화 알고리즘을 사용해 DB 인스턴스의 호스팅 서버에 저장된 데이터를 암호화합니다. \nAmazon RDS 암호화된 DB 인스턴스는 기본 스토리지에 대한 무단 액세스로부터 데이터의 보안을 유지해 추가 계층의 데이터 보호를 제공합니다. 클라우드에 배포된 애플리케이션의 데이터 보호를 강화하고 휴면 상태의 데이터 암호화를 위한 규정 준수 요구 사항을 만족하기 위해 Amazon RDS 암호화를 사용할 수 있습니다.\n\n* AWS 관리형 키가 아닌 고객관리형 키 사용할것!",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS Dashboard 에서 DB 인스턴스를 클릭 합니다.\n3. 검사 할 RDS 인스턴스를 선택합니다.\n4. 구성 탭의 스토리지 페이지에서 암호화 상태를 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후 Amazon RDS 콘솔을 엽니다.\n2. 탐색 창에서 데이터베이스를 선택한 다음 변경하려는 DB 인스턴스를 선택합니다.\n3. [수정]을 선택합니다. [DB 인스턴스 수정] 페이지가 나타납니다.\n4. 암호화 설정을 활성화합니다.\n5. [계속]을 선택하고 수정 사항 요약을 확인합니다.\n(6) 즉시 적용을 선택하여 변경 내용을 즉시 적용합니다. 일부의 경우 이 옵션을 선택하면 중단이 발생할 수 있습니다.\n7. 확인 페이지에서 변경 내용을 검토합니다. 변경 내용이 정확할 경우 [DB 인스턴스 수정]을 선택하여 변경 내용을 저장합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/Overview.Encryption.html\nhttps://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/UsingWithRDS.html\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/rds-encryption-enabled.html",
    provider: "AWS",
  },
  {
    classification: "암호화",
    index: "RDS_024",
    risk: "하",
    name: "AES-256 수준 암호화를 사용하여 RDS 스냅샷의 암호화를 보장하는지 확인하시오",
    description:
      "Amazon RDS 암호화를 사용해 DB 인스턴스와 저장된 스냅샷을 보호합니다. Amazon RDS 암호화는 업계 표준 AES-256 암호화 알고리즘을 사용해 DB 인스턴스의 호스팅 서버에 저장된 데이터를 암호화합니다. \nAmazon RDS 암호화된 DB 인스턴스는 기본 스토리지에 대한 무단 액세스로부터 데이터의 보안을 유지해 추가 계층의 데이터 보호를 제공합니다. 클라우드에 배포된 애플리케이션의 데이터 보호를 강화하고 휴면 상태의 데이터 암호화를 위한 규정 준수 요구 사항을 만족하기 위해 Amazon RDS 암호화를 사용할 수 있습니다.",
    inspection:
      "1. AWS Management 콘솔에 로그인한 후 RDS 대시 보드로 이동합니다 .\n2. 탐색 패널의 RDS Dashboard 에서 DB 인스턴스를 클릭 합니다.\n3. 검사 할 RDS 인스턴스를 선택합니다.\n4. 구성 탭의 스토리지 페이지에서 암호화 상태를 확인합니다.",
    action:
      "1. AWS Management 콘솔에 로그인한 후 Amazon RDS 콘솔을 엽니다.\n2. 탐색 창에서 데이터베이스를 선택한 다음 변경하려는 DB 인스턴스를 선택합니다.\n3. [수정]을 선택합니다. [DB 인스턴스 수정] 페이지가 나타납니다.\n4. 암호화 설정을 활성화합니다.\n5. [계속]을 선택하고 수정 사항 요약을 확인합니다.\n(6) 즉시 적용을 선택하여 변경 내용을 즉시 적용합니다. 일부의 경우 이 옵션을 선택하면 중단이 발생할 수 있습니다.\n7. 확인 페이지에서 변경 내용을 검토합니다. 변경 내용이 정확할 경우 [DB 인스턴스 수정]을 선택하여 변경 내용을 저장합니다.",
    reference:
      "https://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/Overview.Encryption.html\nhttps://docs.aws.amazon.com/ko_kr/AmazonRDS/latest/UserGuide/UsingWithRDS.html\nhttps://www.cloudconformity.com/knowledge-base/aws/RDS/snapshot-encrypted.html",
    provider: "AWS",
  },
];
