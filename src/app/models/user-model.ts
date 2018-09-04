/** 
 * These functions will throw an error if the JSON doesn't
 * match the expected interface, even if the JSON is valid.
 */

export interface UserInfo {
	user: User;
}

export interface User {
	userID: string;
	emailID: string;
	mobileNo: string;
	detailsVerified: string;
	name: string;
	highestQalification: string;
	keySkills: string[];
	experiances: Experiance[];
	savedJobs: SavedJob[];
	savedSearchPreference: SavedSearchPreference;
}

export interface Experiance {
}

export interface SavedJob {
	jobID: string;
}

export interface SavedSearchPreference {
	distance: string;
	age: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export namespace Convert {
	export function toUserInfo(json: string): UserInfo {
		return JSON.parse(json);
	}

	export function userInfoToJson(value: UserInfo): string {
		return JSON.stringify(value, null, 2);
	}
}
