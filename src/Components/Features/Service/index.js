"use client";

import { API_BASE_URL } from "@/constant/appConstants";
import { Box } from "@mui/material";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AzureBottomBanner = dynamic(() => import("@/Components/Features/Service/Azure/BottomBanner"));
const OurRangeOfAzureCloudServices = dynamic(
  () => import("@/Components/Features/Service/Azure/OurRangeOfAZURE"),
);
const AzureServicesBanner = dynamic(() => import("@/Components/Features/Service/AzureBanner"));
const AzureInfoCard = dynamic(() => import("@/Components/Features/Service/Azure/InfoCard"));
const WhyAzureComponent = dynamic(() => import("@/Components/Features/Service//Azure/WhyAzure"));
const ServicesBanner = dynamic(() => import("@/Components/Features/Service/Banner"));
const ComingSoonComponent = dynamic(() => import("@/Components/Common/ComingSoon"));

const AwsInfoCard = dynamic(() => import("@/Components/Features/Service/AWS/InfoCard"));
const BottomBanner = dynamic(() => import("@/Components/Features/Service/AWS/BottomBanner"));
const OurRangeOfAmazonCloudServices = dynamic(
  () => import("@/Components/Features/Service/AWS/OurRangeOfAWS"),
);

const WhyAWSComponent = dynamic(() => import("@/Components/Features/Service/AWS/WhyAWS"));

const SdsInfoCard = dynamic(() => import("@/Components/Features/Service/SDS/InfoCard"));
const SDSBottomBanner = dynamic(() => import("@/Components/Features/Service/SDS/BottomBanner"));
const OurRangeOfDevelopmentCloudServices = dynamic(
  () => import("@/Components/Features/Service/SDS/OurRangeOfSDS"),
);

const WhySDSComponent = dynamic(() => import("@/Components/Features/Service/SDS/WhySDS"));
const SDSBanner = dynamic(() => import("@/Components/Features/Service/SDS/Banner"));
const OurClient = dynamic(() => import("@/Components/Features/Service/SDS/OurClient"));
const TechnologyUse = dynamic(() => import("@/Components/Features/Service/SDS/Technology"));


// IBM
const IBMServiceBanner = dynamic(() => import("@/Components/Features/Service/IBM/Banner"));
const IBMServiceInfoCard = dynamic(() => import("@/Components/Features/Service/IBM/InfoCard"));
const WhyIBMComponent = dynamic(() => import("@/Components/Features/Service/IBM/WhyIBM"));
const OurRangeOfIBMCloudServices = dynamic(
  () => import("@/Components/Features/Service/IBM/OurRangeOfIBM"),
);
const IBMBottomBanner = dynamic(() => import("@/Components/Features/Service/IBM/BottomBanner"));

// Google
const GoogleServiceBanner = dynamic(() => import("@/Components/Features/Service/Google/Banner"));
const GoogleServiceInfoCard = dynamic(
  () => import("@/Components/Features/Service/Google/InfoCard"),
);
const WhyGoogleComponent = dynamic(() => import("@/Components/Features/Service/Google/WhyGoogle"));
const OurRangeOfGoogleCloudServices = dynamic(
  () => import("@/Components/Features/Service/Google/OurRangeOfGoogle"),
);
const GoogleBottomBanner = dynamic(
  () => import("@/Components/Features/Service/Google/BottomBanner"),
);

// GoogleWorkspace
const GoogleWorkspaceServiceBanner = dynamic(
  () => import("@/Components/Features/Service/GoogleWorkSpace/Banner"),
);
const GoogleWorkspaceServiceInfoCard = dynamic(
  () => import("@/Components/Features/Service/GoogleWorkSpace/InfoCard"),
);
const WhyGoogleWorkspaceComponent = dynamic(
  () => import("@/Components/Features/Service/GoogleWorkSpace/WhyGoogleWorkSpace"),
);
const OurRangeOfGoogleWorkspaceCloudServices = dynamic(
  () => import("@/Components/Features/Service/GoogleWorkSpace/OurRangeOfGoogleWorkSpace"),
);
const GoogleWorkspaceBottomBanner = dynamic(
  () => import("@/Components/Features/Service/GoogleWorkSpace/BottomBanner"),
);

// MicroSoftTeams
const MicroSoftTeamsServiceBanner = dynamic(
  () => import("@/Components/Features/Service/MicrosoftTeams/Banner"),
);
const MicroSoftTeamsServiceInfoCard = dynamic(
  () => import("@/Components/Features/Service/MicrosoftTeams/InfoCard"),
);
const WhyMicroSoftTeamsComponent = dynamic(
  () => import("@/Components/Features/Service/MicrosoftTeams/WhyMicroSoftTeams"),
);
const OurRangeOfMicroSoftTeamsCloudServices = dynamic(
  () => import("@/Components/Features/Service/MicrosoftTeams/OurRangeOfMicroSoftTeams"),
);
const MicroSoftTeamsBottomBanner = dynamic(
  () => import("@/Components/Features/Service/MicrosoftTeams/BottomBanner"),
);

// MicroSoft365
const MicroSoft365ServiceBanner = dynamic(
  () => import("@/Components/Features/Service/MicroSoft365/Banner"),
);
const MicroSoft365ServiceInfoCard = dynamic(
  () => import("@/Components/Features/Service/MicroSoft365/InfoCard"),
);
const WhyMicroSoft365Component = dynamic(
  () => import("@/Components/Features/Service/MicroSoft365/WhyMicroSoft365"),
);
const OurRangeOfMicroSoft365CloudServices = dynamic(
  () => import("@/Components/Features/Service/MicroSoft365/OurRangeOfMicroSoft365"),
);
const MicroSoft365BottomBanner = dynamic(
  () => import("@/Components/Features/Service/MicroSoft365/BottomBanner"),
);

// Fortnet
const FortnetServiceBanner = dynamic(() => import("@/Components/Features/Service/Fortnet/Banner"));
const FortnetServiceInfoCard = dynamic(
  () => import("@/Components/Features/Service/Fortnet/InfoCard"),
);
const WhyFortnetComponent = dynamic(
  () => import("@/Components/Features/Service/Fortnet/WhyFortnet"),
);
const OurRangeOfFortnetServices = dynamic(
  () => import("@/Components/Features/Service/Fortnet/OurRangeOfFortnet"),
);
const FortnetBottomBanner = dynamic(
  () => import("@/Components/Features/Service/Fortnet/BottomBanner"),
);

// TrendMicro
const TrendMicroServiceBanner = dynamic(
  () => import("@/Components/Features/Service/TrendMicro/Banner"),
);
const TrendMicroServiceInfoCard = dynamic(
  () => import("@/Components/Features/Service/TrendMicro/InfoCard"),
);
const WhyTrendMicroComponent = dynamic(
  () => import("@/Components/Features/Service/TrendMicro/WhyTrendMicro"),
);
const OurRangeOfTrendMicroServices = dynamic(
  () => import("@/Components/Features/Service/TrendMicro/OurRangeOfTrendMicro"),
);
const TrendMicroBottomBanner = dynamic(
  () => import("@/Components/Features/Service/TrendMicro/BottomBanner"),
);

// Paloalto
const PaloaltoServiceBanner = dynamic(
  () => import("@/Components/Features/Service/Paloalto/Banner"),
);
const PaloaltoServiceInfoCard = dynamic(
  () => import("@/Components/Features/Service/Paloalto/InfoCard"),
);
const WhyPaloaltoComponent = dynamic(
  () => import("@/Components/Features/Service/Paloalto/WhyPaloalto"),
);
const OurRangeOfPaloaltoServices = dynamic(
  () => import("@/Components/Features/Service/Paloalto/OurRangeOfPaloalto"),
);
const PaloaltoBottomBanner = dynamic(
  () => import("@/Components/Features/Service/Paloalto/BottomBanner"),
);

// Seqrite
const SeqriteServiceBanner = dynamic(() => import("@/Components/Features/Service/Seqrite/Banner"));
const PSeqriteServiceInfoCard = dynamic(
  () => import("@/Components/Features/Service/Seqrite/InfoCard"),
);
const WhySeqriteComponent = dynamic(
  () => import("@/Components/Features/Service/Seqrite/WhySeqrite"),
);
const OurRangeOfSeqriteoServices = dynamic(
  () => import("@/Components/Features/Service/Seqrite/OurRangeOfSeqrite"),
);
const SeqriteBottomBanner = dynamic(
  () => import("@/Components/Features/Service/Seqrite/BottomBanner"),
);

// CommonService page
const CommonServiceBanner = dynamic(
  () => import("@/Components/Features/Service/CommonServicePage/Banner"),
);
const CommonServiceInfoCard = dynamic(
  () => import("@/Components/Features/Service/CommonServicePage/InfoCard"),
);
const WhyCommonServiceComponent = dynamic(
  () => import("@/Components/Features/Service/CommonServicePage/WhyCommonService"),
);
const OurRangeOfCommonServices = dynamic(
  () => import("@/Components/Features/Service/CommonServicePage/OurRangeOfCommonService"),
);
const CommonBottomBanner = dynamic(
  () => import("@/Components/Features/Service/CommonServicePage/BottomBanner"),
);


export const serviceComponents = {
  Software_Solutions: {
    SDS: [
      (props) => <SDSBanner serviceData={props?.serviceData?.data?.SDSBanner} />,
      (props) => <SdsInfoCard SDSInfoData={props?.serviceData?.data?.SDSInfo} />,
	  (props) => <OurClient serviceData={props?.serviceData?.data?.ourClient} />,
      (props) => <WhySDSComponent WhySDSInfoData={props?.serviceData?.data?.WhySDSInfo} />,
	  (props) => <TechnologyUse serviceData={props?.serviceData?.data?.technology} />,
      (props) => <SDSBottomBanner BottomData={props?.serviceData?.data?.BottomBanner} />,
    ],
    WDS: [
      (props) => <SDSBanner serviceData={props?.serviceData?.data?.SDSBanner} />,
      (props) => <SdsInfoCard SDSInfoData={props?.serviceData?.data?.SDSInfo} />,
	  (props) => <OurClient serviceData={props?.serviceData?.data?.ourClient} />,
      (props) => <WhySDSComponent WhySDSInfoData={props?.serviceData?.data?.WhySDSInfo} />,
	  (props) => <TechnologyUse serviceData={props?.serviceData?.data?.technology} />,
      (props) => <BottomBanner BottomData={props?.serviceData?.data?.BottomBanner} />,
    ],
  },
  Cloud_Services: {
    Google: [
      (props) => <GoogleServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <GoogleServiceInfoCard IBMInfoData={props?.serviceData?.data?.infoCard} />,
      (props) => <WhyGoogleComponent whyGoogleInfoData={props?.serviceData?.data?.whyGoogleInfo} />,
      (props) => (
        <OurRangeOfGoogleCloudServices
          OurRangeOfGoogleinfoData={props?.serviceData?.data?.ourRangeOfGoogleinfo}
        />
      ),
      (props) => <GoogleBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    IBM: [
      (props) => <IBMServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <IBMServiceInfoCard IBMInfoData={props?.serviceData?.data?.infoCard} />,
      (props) => <WhyIBMComponent whyIBMInfoData={props?.serviceData?.data?.whyIBMInfo} />,
      (props) => (
        <OurRangeOfIBMCloudServices
          OurRangeOfIBMinfoData={props?.serviceData?.data?.ourRangeOfIBMinfo}
        />
      ),
      IBMBottomBanner,
    ],
    AWS: [
      (props) => <ServicesBanner serviceData={props?.serviceData?.data?.AWSBanner} />,
      (props) => <AwsInfoCard AWSInfoData={props?.serviceData?.data?.AWSInfo} />,
      (props) => <WhyAWSComponent WhyAWSInfoData={props?.serviceData?.data?.WhyAWSInfo} />,
      (props) => (
        <OurRangeOfAmazonCloudServices
          OurRangeAWSInfoData={props?.serviceData?.data?.OurRangeOfAWSinfo}
        />
      ),
      (props) => <BottomBanner BottomData={props?.serviceData?.data?.BottomBanner} />,
    ],
    Azure: [
      (props) => <AzureServicesBanner serviceData={props?.serviceData?.data?.AZUREBanner} />,
      (props) => <AzureInfoCard AZUREInfoData={props?.serviceData?.data?.AZUREInfo} />,
      (props) => <WhyAzureComponent WhyAZUREInfoData={props?.serviceData?.data?.WhyAZUREInfo} />,
      (props) => (
        <OurRangeOfAzureCloudServices
          OurRangeOfAzureinfoData={props?.serviceData?.data?.OurRangeOfAzureinfo}
        />
      ),
      (props) => <AzureBottomBanner BottomData={props?.serviceData?.data?.BottomBanner} />,
    ],
    Oracle: [ComingSoonComponent],
  },
  Productivity_Suite: {
    IBM: [
      (props) => <IBMServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <IBMServiceInfoCard IBMInfoData={props?.serviceData?.data?.infoCard} />,
      (props) => <WhyIBMComponent whyIBMInfoData={props?.serviceData?.data?.whyIBMInfo} />,
      (props) => (
        <OurRangeOfIBMCloudServices
          OurRangeOfIBMinfoData={props?.serviceData?.data?.ourRangeOfIBMinfo}
        />
      ),
      IBMBottomBanner,
    ],
    GoogleWorkspace: [
      (props) => <GoogleWorkspaceServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => (
        <GoogleWorkspaceServiceInfoCard IBMInfoData={props?.serviceData?.data?.infoCard} />
      ),
      (props) => (
        <WhyGoogleWorkspaceComponent
          whyGoogleWorkSpaceInfoData={props?.serviceData?.data?.whyGoogleWorkSpaceInfo}
        />
      ),
      (props) => (
        <OurRangeOfGoogleWorkspaceCloudServices
          OurRangeOfGoogleWorkSpaceinfoData={
            props?.serviceData?.data?.ourRangeOfGoogleWorkSpaceinfo
          }
        />
      ),
      (props) => (
        <GoogleWorkspaceBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />
      ),
    ],
    MicrosoftTeams: [
      (props) => <MicroSoftTeamsServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <MicroSoftTeamsServiceInfoCard IBMInfoData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyMicroSoftTeamsComponent
          whyMicroSoftTeamsInfoData={props?.serviceData?.data?.whyMicroSoftTeamsInfo}
        />
      ),
      (props) => (
        <OurRangeOfMicroSoftTeamsCloudServices
          OurRangeOfMicroSoftteamsinfoData={props?.serviceData?.data?.ourRangeOfMicroSoftTeamsinfo}
        />
      ),
      (props) => <MicroSoftTeamsBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
  },
  Network_and_Security: {
    Arubq: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyArubqInfo}
          cardType={props?.serviceData?.data?.whyArubqInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyArubqInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyArubqInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfArubqinfo}
          cardType={props?.serviceData?.data?.ourRangeOfArubqinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfArubqinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfArubqinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfArubqinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Cisco: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyCiscoInfo}
          cardType={props?.serviceData?.data?.whyCiscoInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyCiscoInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyCiscoInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfCiscoinfo}
          cardType={props?.serviceData?.data?.ourRangeOfCiscoinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfCiscoinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfCiscoinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfCiscoinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Barracuda: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyBarracudaInfo}
          cardType={props?.serviceData?.data?.whyBarracudaInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyBarracudaInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyBarracudaInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfBarracudainfo}
          cardType={props?.serviceData?.data?.ourRangeOfBarracudainfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfBarracudainfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfBarracudainfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfBarracudainfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Allot: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyAllotInfo}
          cardType={props?.serviceData?.data?.whyAllotInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyAllotInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyAllotInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfAllotinfo}
          cardType={props?.serviceData?.data?.ourRangeOfAllotinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfAllotinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfAllotinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfAllotinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Paloalto: [
      (props) => <PaloaltoServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <PaloaltoServiceInfoCard PaloaltoData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyPaloaltoComponent whyPaloaltoInfoData={props?.serviceData?.data?.whyPaloaltoInfo} />
      ),
      (props) => (
        <OurRangeOfPaloaltoServices
          ourRangeOfPaloaltoinfoData={props?.serviceData?.data?.ourRangeOfPaloaltoinfo}
        />
      ),
      (props) => <PaloaltoBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Google: [
      (props) => <GoogleServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <GoogleServiceInfoCard IBMInfoData={props?.serviceData?.data?.infoCard} />,
      (props) => <WhyGoogleComponent whyGoogleInfoData={props?.serviceData?.data?.whyGoogleInfo} />,
      (props) => (
        <OurRangeOfGoogleCloudServices
          OurRangeOfGoogleinfoData={props?.serviceData?.data?.ourRangeOfGoogleinfo}
        />
      ),
      (props) => <GoogleBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Seqrite: [
      (props) => <SeqriteServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <PSeqriteServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhySeqriteComponent whySeqriteInfoData={props?.serviceData?.data?.whySeqriteInfo} />
      ),
      (props) => (
        <OurRangeOfSeqriteoServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfSeqriteinfo}
        />
      ),
      (props) => <SeqriteBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Sophos: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whySophosInfo}
          cardType={props?.serviceData?.data?.whySophosInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whySophosInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whySophosInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfSophosinfo}
          cardType={props?.serviceData?.data?.ourRangeOfSophosinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfSophosinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfSophosinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfSophosinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Symantec: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whySymantecInfo}
          cardType={props?.serviceData?.data?.whySymantecInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whySymantecInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whySymantecInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfSymantecinfo}
          cardType={props?.serviceData?.data?.ourRangeOfSymantecinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfSymantecinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfSymantecinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfSymantecinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Bitdefender: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyBitdefenderInfo}
          cardType={props?.serviceData?.data?.whyBitdefenderInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyBitdefenderInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyBitdefenderInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfBitdefenderinfo}
          cardType={props?.serviceData?.data?.ourRangeOfBitdefenderinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfBitdefenderinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={
            props?.serviceData?.data?.ourRangeOfBitdefenderinfo?.[0]?.backgroundColor
          }
          boxShadowColor={props?.serviceData?.data?.ourRangeOfBitdefenderinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    TrendMicro: [
      (props) => <TrendMicroServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <TrendMicroServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyTrendMicroComponent
          whyTrendMicroInfoData={props?.serviceData?.data?.whyTrendMicroInfo}
        />
      ),
      (props) => (
        <OurRangeOfTrendMicroServices
          OurRangeOfTrendMicroinfoData={props?.serviceData?.data?.ourRangeOfTrendMicroinfo}
        />
      ),
      (props) => <TrendMicroBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Fortnet: [
      (props) => <FortnetServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <FortnetServiceInfoCard FortnetData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyFortnetComponent whyFortnetInfoData={props?.serviceData?.data?.whyFortinetInfo} />
      ),
      (props) => (
        <OurRangeOfFortnetServices
          OurRangeOfFortnetinfoData={props?.serviceData?.data?.ourRangeOfFortinetinfo}
        />
      ),
      (props) => <FortnetBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
  },
  Networking: {
    Arubq: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyArubqInfo}
          cardType={props?.serviceData?.data?.whyArubqInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyArubqInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyArubqInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfArubqinfo}
          cardType={props?.serviceData?.data?.ourRangeOfArubqinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfArubqinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfArubqinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfArubqinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Cisco: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyCiscoInfo}
          cardType={props?.serviceData?.data?.whyCiscoInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyCiscoInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyCiscoInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfCiscoinfo}
          cardType={props?.serviceData?.data?.ourRangeOfCiscoinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfCiscoinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfCiscoinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfCiscoinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
  },
  Hypervision: {
    DellEMC: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyDellEMCInfo}
          cardType={props?.serviceData?.data?.whyDellEMCInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyDellEMCInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyDellEMCInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfDellEMCinfo}
          cardType={props?.serviceData?.data?.ourRangeOfDellEMCinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfDellEMCinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfDellEMCinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfDellEMCinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Nutanix: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyNutanixInfo}
          cardType={props?.serviceData?.data?.whyNutanixInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyNutanixInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyNutanixInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfNutanixinfo}
          cardType={props?.serviceData?.data?.ourRangeOfNutanixinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfNutanixinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfNutanixinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfNutanixinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    HewlettPackard: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyHewlettPackardInfo}
          cardType={props?.serviceData?.data?.whyHewlettPackardInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyHewlettPackardInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyHewlettPackardInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfHewlettPackardinfo}
          cardType={props?.serviceData?.data?.ourRangeOfHewlettPackardinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfHewlettPackardinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={
            props?.serviceData?.data?.ourRangeOfHewlettPackardinfo?.[0]?.backgroundColor
          }
          boxShadowColor={
            props?.serviceData?.data?.ourRangeOfHewlettPackardinfo?.[0]?.boxShadowColor
          }
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
  },
  Software_Licensing: {
    AutoCad: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyAutoCadInfo}
          cardType={props?.serviceData?.data?.whyAutoCadInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyAutoCadInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyAutoCadInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfAutoCadinfo}
          cardType={props?.serviceData?.data?.ourRangeOfAutoCadinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfAutoCadinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfAutoCadinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfAutoCadinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    RedHat: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyRedHatInfo}
          cardType={props?.serviceData?.data?.whyRedHatInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyRedHatInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyRedHatInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfRedHatinfo}
          cardType={props?.serviceData?.data?.ourRangeOfRedHatinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfRedHatinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfRedHatinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfRedHatinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    SolarWinds: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whySolarWindsInfo}
          cardType={props?.serviceData?.data?.whySolarWindsInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whySolarWindsInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whySolarWindsInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfSolarWindsinfo}
          cardType={props?.serviceData?.data?.ourRangeOfSolarWindsinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfSolarWindsinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfSolarWindsinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfSolarWindsinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    DropBox: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyDropBoxInfo}
          cardType={props?.serviceData?.data?.whyDropBoxInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyDropBoxInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyDropBoxInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfDropBoxinfo}
          cardType={props?.serviceData?.data?.ourRangeOfDropBoxinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfDropBoxinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfDropBoxinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfDropBoxinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Adobe: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyAdobeInfo}
          cardType={props?.serviceData?.data?.whyAdobeInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyAdobeInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyAdobeInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfAdobeinfo}
          cardType={props?.serviceData?.data?.ourRangeOfAdobeinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfAdobeinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfAdobeinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfAdobeinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    GoogleWorkspace: [
      (props) => <GoogleWorkspaceServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => (
        <GoogleWorkspaceServiceInfoCard IBMInfoData={props?.serviceData?.data?.infoCard} />
      ),
      (props) => (
        <WhyGoogleWorkspaceComponent
          whyGoogleWorkSpaceInfoData={props?.serviceData?.data?.whyGoogleWorkSpaceInfo}
        />
      ),
      (props) => (
        <OurRangeOfGoogleWorkspaceCloudServices
          OurRangeOfGoogleWorkSpaceinfoData={
            props?.serviceData?.data?.ourRangeOfGoogleWorkSpaceinfo
          }
        />
      ),
      (props) => (
        <GoogleWorkspaceBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />
      ),
    ],
    CorelDraw: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyCorelDrawInfo}
          cardType={props?.serviceData?.data?.whyCorelDrawInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyCorelDrawInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyCorelDrawInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfCorelDrawinfo}
          cardType={props?.serviceData?.data?.ourRangeOfCorelDrawinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfCorelDrawinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfCorelDrawinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfCorelDrawinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    IceWarp: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyIceWarpInfo}
          cardType={props?.serviceData?.data?.whyIceWarpInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyIceWarpInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyIceWarpInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfIceWarpinfo}
          cardType={props?.serviceData?.data?.ourRangeOfIceWarpinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfIceWarpinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfIceWarpinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfIceWarpinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    MicroSoft365: [
      (props) => <MicroSoft365ServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => (
        <MicroSoft365ServiceInfoCard MicroSoft365Data={props?.serviceData?.data?.infoCard} />
      ),
      (props) => (
        <WhyMicroSoft365Component
          whyMicroSoft365InfoData={props?.serviceData?.data?.whyMicroSoft365Info}
        />
      ),
      (props) => (
        <OurRangeOfMicroSoft365CloudServices
          OurRangeOfMicroSoft365infoData={props?.serviceData?.data?.ourRangeOfMicroSoft365info}
        />
      ),
      (props) => <MicroSoft365BottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
  },
  Backup_and_Recovery: {
    Synology: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whySynologyInfo}
          cardType={props?.serviceData?.data?.whySynologyInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whySynologyInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whySynologyInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfSynologyinfo}
          cardType={props?.serviceData?.data?.ourRangeOfSynologyinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfSynologyinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfSynologyinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfSynologyinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Acronis: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyAcronisInfo}
          cardType={props?.serviceData?.data?.whyAcronisInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyAcronisInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyAcronisInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfAcronisinfo}
          cardType={props?.serviceData?.data?.ourRangeOfAcronisinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfAcronisinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfAcronisinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfAcronisinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Veeam: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyVeeamInfo}
          cardType={props?.serviceData?.data?.whyVeeamInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyVeeamInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyVeeamInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfVeeaminfo}
          cardType={props?.serviceData?.data?.ourRangeOfVeeaminfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfVeeaminfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfVeeaminfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfVeeaminfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Purestorage: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyPurestorageInfo}
          cardType={props?.serviceData?.data?.whyPurestorageInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyPurestorageInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyPurestorageInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfPurestorageinfo}
          cardType={props?.serviceData?.data?.ourRangeOfPurestorageinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfPurestorageinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={
            props?.serviceData?.data?.ourRangeOfPurestorageinfo?.[0]?.backgroundColor
          }
          boxShadowColor={props?.serviceData?.data?.ourRangeOfPurestorageinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
    Veritas: [
      (props) => <CommonServiceBanner serviceData={props?.serviceData?.data?.banner} />,
      (props) => <CommonServiceInfoCard TrendMicroData={props?.serviceData?.data?.infoCard} />,
      (props) => (
        <WhyCommonServiceComponent
          whySeqriteInfoData={props?.serviceData?.data?.whyVeritasInfo}
          cardType={props?.serviceData?.data?.whyVeritasInfo?.[0]?.cardType}
          boxhoverColor={props?.serviceData?.data?.whyVeritasInfo?.[0]?.boxhoverColor}
          borderColor={props?.serviceData?.data?.whyVeritasInfo?.[0]?.borderColor}
        />
      ),
      (props) => (
        <OurRangeOfCommonServices
          ourRangeOfSeqriteinfoData={props?.serviceData?.data?.ourRangeOfVeritasinfo}
          cardType={props?.serviceData?.data?.ourRangeOfVeritasinfo?.[0]?.cardType}
          backgroundHoverColor={
            props?.serviceData?.data?.ourRangeOfVeritasinfo?.[0]?.backgroundHoverColor
          }
          backgroundColor={props?.serviceData?.data?.ourRangeOfVeritasinfo?.[0]?.backgroundColor}
          boxShadowColor={props?.serviceData?.data?.ourRangeOfVeritasinfo?.[0]?.boxShadowColor}
        />
      ),
      (props) => <CommonBottomBanner BottomData={props?.serviceData?.data?.bottomBanner} />,
    ],
  },
};

export const ServiceMainComponent = ({ serviceComponents }) => {
  const searchParams = useSearchParams();
  const subTab = searchParams.get("subTab");
  const subItem = searchParams.get("subItem");
  const [serviceData, setServiceData] = useState(null);

  const components = serviceComponents[subTab]?.[subItem];

  // Custom fetch function to handle API calls based on service type
  const fetchServiceData = async (serviceType) => {
	let apiUrl;
	if(serviceType.toLowerCase() == 'sds' || serviceType.toLowerCase() == 'wds') {
		apiUrl = `${API_BASE_URL}/v1/service/${serviceType.toLowerCase()}-home`;
	} else {
		apiUrl = `${API_BASE_URL}/v1/service/${serviceType.toLowerCase()}-home`;
	}
    try {
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch data from ${serviceType} API`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching data from ${serviceType} API:`, error);
      return null;
    }
  };

  useEffect(() => {
    if (subItem) {
      fetchServiceData(subItem).then((data) => {
        setServiceData(data);
      });
    }
  }, [subItem]);

  if (!components) {
    console.error(`Service not found for subTab: ${subTab}, subItem: ${subItem}`);
    return <Box>Service not available or sub-item not found.</Box>;
  }

  return components.map((Component, index) => (
    <Box key={index}>
      {typeof Component === "function" ? (
        <Component  serviceData={serviceData} />
      ) : (
        <Component />
      )}
    </Box>
  ));
};
