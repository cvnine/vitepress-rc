export type ErrorCallback = (err: Error) => void

const errorBoundary = async (Element: any, errorCallback: ErrorCallback, domRef: any) => {
	const [{ default: React }, { default: ReactDom }] = await Promise.all([
		import('https://jspm.dev/react'),
		import('https://jspm.dev/react-dom'),
	])

	class ErrorBoundary extends React.Component {
		componentDidCatch(error: Error) {
			errorCallback(error)
		}

		render() {
			return typeof Element === 'function' ? <Element /> : Element
		}
	}
	ReactDom.render(<ErrorBoundary />, domRef.current)
}

export default errorBoundary
