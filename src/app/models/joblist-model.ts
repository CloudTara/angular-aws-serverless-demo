/** 
 * These functions will throw an error if the JSON doesn't
 * match the expected interface, even if the JSON is valid.
 */

export interface JobPortal {
	jobs: Job[];
}

export interface Job {
	jobID: string;
	date: string;
	role: string;
	companyID: string;
	description: string;
	keySkills: string[];
	exp: number;
	loc: string;
	salaryCtc: string;
	jobLink: string;
	jobType: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export namespace Convert {
	export function toJobPortal(json: string): JobPortal {
		return JSON.parse(json);
	}

	export function jobPortalToJson(value: JobPortal): string {
		return JSON.stringify(value, null, 2);
	}
}
