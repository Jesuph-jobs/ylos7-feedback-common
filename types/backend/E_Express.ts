import { Request } from 'express';
import * as core from 'express-serve-static-core';
import { ParsedQs } from 'qs';

import { ParticipationDocumentI, ParticipationHydratedDocument } from './models/participation';
import { UserHydratedDocument } from './models/user';

type RequestExtends = UserDocumentI | ParticipationDocumentI;

interface RequestExtendsMap<T extends RequestExtends | null> {
	user?: T extends UserDocumentI ? UserHydratedDocument : null;
	participation?: T extends ParticipationDocumentI ? ParticipationHydratedDocument : null;
}

export interface ERequest<
	Req extends RequestExtends | null = null,
	Params = core.ParamsDictionary,
	ResBody = any,
	ReqBody = any,
	ReqQuery = core.Query,
	Locals extends Record<string, any> = Record<string, any>,
> extends Request<Params, ResBody, ReqBody, ReqQuery & ParsedQs, Locals>,
		RequestExtendsMap<Req> {}
