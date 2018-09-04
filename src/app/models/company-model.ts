import { Job } from "./joblist-model";

export interface UserInfo {
	comapany: Comapany[];
}

export interface Comapany {
	companyID:          string;
	name:               string;
	jobsPosted:         Job[];
	companyDescription: CompanyDescription;
	reviews:            Review[];
	location:           string;
	avarageSalaryCtc:   string;
	companyLink:        string;
}

export interface Review{

}

export interface CompanyDescription {
	title:       string;
	mediaLink:   string;
	description: string;
	aboutUs:     string;
}

// Converts JSON strings to/from your types
export namespace Convert {
	export function toUserInfo(json: string): UserInfo {
			return JSON.parse(json);
	}

	export function userInfoToJson(value: UserInfo): string {
			return JSON.stringify(value);
	}
}
