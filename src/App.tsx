import { useState } from 'react';
import RootLayout from './_components/RootLayout';
import {
	Button,
	Divider,
	Input,
	Link,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
	useDisclosure
} from '@nextui-org/react';
import DynamicWrapper from './_components/DynamicWrapper';
import ScrollShadowComponent from './_components/ScrollShadowComponent';
import { GetResponse } from '../lib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');
	const { isOpen, onOpen: open, onOpenChange: openChange } = useDisclosure();

	const params = new URLSearchParams(window.location.search);
	const name = params.get('name');

	return (
		<RootLayout>
			<main className="grid items-stretch justify-stretch min-h-screen m-0 px-12 py-16 md:p-16 lg:p-32 border-2 border-red-500">
				<Toaster position="top-right" />
				<DynamicWrapper smallWrapper={ScrollShadowComponent}>
					<div
						className={`${!name ? 'flex' : 'hidden'} flex-col justify-center items-center gap-4 md:gap-8 dark:text-white text-center text-xl font-mono tracking-widest`}
					>
						<h1 className="font-semibold sm:text-2xl md:text-4xl">
							Genderize!
						</h1>
						<form
							className={`flex flex-col justify-center items-center gap-8 w-full`}
							onSubmit={submitForm}
						>
							<Input
								isRequired
								isClearable
								variant="underlined"
								label="Name"
								size="lg"
								placeholder="First [Middle] Last"
								value={value}
								onValueChange={setValue}
							/>
							<div className="flex flex-row items-center justify-center gap-4 md:gap-8">
								<Button onPress={submit} size="lg" color="success">
									Solve
								</Button>
							</div>
							<p className="text-red-500 text-base">{error}</p>
						</form>
					</div>
					<div
						className={`${name ? 'flex' : 'hidden'} flex-col justify-center items-center gap-4 md:gap-8 dark:text-white text-center text-xl font-mono tracking-widest`}
					>
						<h1 className="font-semibold text-2xl md:text-4xl">
							{`${name!}'s gender:`}
						</h1>
						<p className="text-xl md:text-2xl font-semibold rounded-2xl py-2 px-4 bg-neutral-500">{`"${GetResponse(name ?? '')}"`}</p>
						<Divider className="my-4 mx-2 h-1" />
						<div className="flex flex-row justify-center items-middle">
							<Button
								onPress={() => {
									window.navigator.clipboard.writeText(GetResponse(name!));
									toast.success('Copied to clipboard!');
								}}
								size="lg"
								color="primary"
								endContent={<FontAwesomeIcon icon={faCopy} />}
							>
								Copy
							</Button>
						</div>
						<Link
							href={new URL(
								window.location.pathname,
								window.location.origin
							).toString()}
							isBlock
							color="secondary"
							underline="always"
						>
							Go back
						</Link>
					</div>
				</DynamicWrapper>
			</main>
			<Modal
				title="Credits"
				isOpen={isOpen}
				onOpenChange={openChange}
				placement="center"
				scrollBehavior="inside"
				size="2xl"
			>
				<ModalContent>
					<>
						<ModalHeader>Credits</ModalHeader>
						<ModalBody>
							<div className="flex flex-col gap-4">
								<p className="mb-4">
									Jender is a webapp which randomly serves up odd responses to
									questions about gender. It's even funnier when the results are
									used to answer common everyday questions! The source code is
									available on{' '}
									<Link
										href="https://github.com/akpi816218/jender"
										target="_blank"
										underline="always"
										isExternal
									>
										GitHub
									</Link>
									.
									<br />
									<br />
									Developed by{' '}
									<Link
										href="https://akpi.is-a.dev/"
										target="_blank"
										underline="always"
										isExternal
									>
										Akhil Pillai
									</Link>
									.
								</p>
								<h2 className="text-center text-lg font-semibold font-press-start text-indigo-600 underline underline-offset-2">
									Open Source Tools and Libraries
								</h2>
								<Table
									isStriped
									classNames={{
										wrapper: 'border-neutral-500 border-2'
									}}
								>
									<TableHeader>
										<TableColumn>Name</TableColumn>
										<TableColumn>License</TableColumn>
										<TableColumn>GitHub</TableColumn>
									</TableHeader>
									<TableBody
										items={[
											{
												name: 'ESLint',
												license: 'MIT',
												github: 'eslint/eslint'
											},
											{
												name: 'eslint-plugin-react',
												license: 'MIT',
												github: 'jsx-eslint/eslint-plugin-react',
												isMono: true
											},
											{
												name: 'Font Awesome',
												license: 'MIT',
												github: 'FortAwesome/react-fontawesome'
											},
											{
												name: 'NextUI',
												license: 'MIT',
												github: 'nextui-org/nextui'
											},
											{
												name: 'Prettier',
												license: 'MIT',
												github: 'prettier/prettier'
											},
											{
												name: 'Puppeteer',
												license: 'Apache-2.0',
												github: 'puppeteer/puppeteer'
											},
											{
												name: 'pwa-asset-generator',
												license: 'MIT',
												github: 'elegantapp/pwa-asset-generator',
												isMono: true
											},
											{
												name: 'React',
												license: 'MIT',
												github: 'facebook/react'
											},
											{
												name: 'Tailwind CSS',
												license: 'MIT',
												github: 'tailwindlabs/tailwindcss'
											},
											{
												name: 'Vite',
												license: 'MIT',
												github: 'vitejs/vite'
											},
											{
												name: 'vite-plugin-react',
												license: 'MIT',
												github: 'vitejs/vite-plugin-react',
												isMono: true
											}
										]}
									>
										{item => (
											<TableRow key={item.name}>
												<TableCell>{item.name}</TableCell>
												<TableCell>{item.license}</TableCell>
												<TableCell>
													<Link
														href={`https://github.com/${item.github}`}
														target="_blank"
														isExternal
													>
														{item.github}
													</Link>
												</TableCell>
											</TableRow>
										)}
									</TableBody>
								</Table>
							</div>
						</ModalBody>
						<ModalFooter>
							<Button onPress={close} color="warning">
								Close
							</Button>
						</ModalFooter>
					</>
				</ModalContent>
			</Modal>
		</RootLayout>
	);

	function submit() {
		if (value.length === 0) {
			setError('Name is required');
			return;
		}
		setError('');
		window.location.search = new URLSearchParams({ name: value }).toString();
	}
	function submitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		submit();
	}
}
