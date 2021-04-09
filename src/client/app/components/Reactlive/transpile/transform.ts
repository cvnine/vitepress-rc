import { transform as _transform } from 'buble'

const opts = {
	objectAssign: 'Object.assign',
	transforms: {
		dangerousForOf: true,
		dangerousTaggedTemplateString: true,
		asyncAwait: false,
		generator: false,
	},
}

async function transform(code: string) {
	// const babel = await import('')

	return _transform(code, opts).code
}

export default transform
