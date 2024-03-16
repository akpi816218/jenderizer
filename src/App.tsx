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
import { GetResponse } from '../lib';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons/faCopy';
import toast, { Toaster } from 'react-hot-toast';
import { faDice } from '@fortawesome/free-solid-svg-icons/faDice';

export default function App() {
	const [value, setValue] = useState('');
	const { isOpen, onOpen: open, onOpenChange: openChange } = useDisclosure();

	const params = new URLSearchParams(window.location.search);
	if (params.has('random') && params.has('name')) {
		params.delete('random');
		window.location.search = params.toString();
	}
	const rand = params.has('random');
	const name = rand
		? Array(window.crypto.getRandomValues(new Uint32Array([0]))).join('')
		: params.get('name');

	return (
		<RootLayout>
			<main className="flex flex-col items-stretch justify-normal min-h-screen m-0 px-12 py-16 md:p-16 lg:p-32 text-center font-mono tracking-widest">
				<Toaster position="top-right" />
				<h1 className="text-center m-4 font-semibold sm:text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple to-purple-light">
					Jenderize!
				</h1>
				<div
					className={`${!name ? 'flex' : 'hidden'} flex-col justify-stretch items-center gap-4 md:gap-8 text-xl`}
				>
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
							value={value}
							onValueChange={setValue}
							className="max-w-xl"
						/>
						<div className="flex flex-row items-center justify-center gap-4 md:gap-8">
							<Button
								onPress={submit}
								size="lg"
								color="success"
								className="text-background"
								type="submit"
							>
								Roll
							</Button>
							OR
							<Button
								onPress={random}
								size="lg"
								color="secondary"
								className="text-background"
								endContent={<FontAwesomeIcon icon={faDice} />}
							>
								Random
							</Button>
						</div>
					</form>
				</div>
				<div
					className={`${name ? 'flex' : 'hidden'} flex-col justify-center items-center gap-2 md:gap-4 dark:text-foreground text-center text-xl font-mono tracking-widest`}
				>
					<h2 className="font-semibold text-2xl md:text-4xl overflow-x-scroll max-w-[calc(100vw-6rem)]">
						{rand ? 'Random' : `${name!}'s`} gender:
					</h2>
					<p className="m-8 text-xl md:text-2xl font-semibold rounded-2xl py-2 px-4 bg-neutral-500">{`${GetResponse(name ?? '')}`}</p>
					<Divider className="my-4 mx-2 h-1" />
					<div className="flex flex-row justify-center items-center gap-4 md:gap-8">
						<Button
							onPress={() => {
								window.navigator.clipboard.writeText(GetResponse(name!));
								toast.success('Copied to clipboard!');
							}}
							size="lg"
							color="primary"
							className="text-background"
							endContent={<FontAwesomeIcon icon={faCopy} />}
						>
							Copy
						</Button>
						<Button
							onPress={() => window.location.reload()}
							size="lg"
							color="success"
							className={`text-background ${rand ? '' : 'hidden'}`}
							endContent={<FontAwesomeIcon icon={faDice} />}
						>
							Roll again
						</Button>
					</div>
					<Link
						href={new URL(
							window.location.pathname,
							window.location.origin
						).toString()}
						isBlock
						color="primary"
						underline="always"
					>
						Go back
					</Link>
				</div>
				<Divider className="my-12 mx-2 h-1" />
				<p className="text-xl my-2 text-center leading-loose">
					Developed by{' '}
					<Link href="https://akpi.is-a.dev/" size="lg" underline="always">
						Akhil Pillai
					</Link>
					.<br />
					Inspired by{' '}
					<Link
						isExternal
						href="https://definitelytransrpgideas.tumblr.com/post/162501281810/are-you-a-boy-or-a-girl-rolls-d20-and-checks"
					>
						this Tumblr post
					</Link>
					.
				</p>
				<div className="flex flex-row justify-center items-middle my-2 md:my-4">
					<Button
						onPress={open}
						size="lg"
						color="primary"
						className="text-background font-semibold"
					>
						Credits
					</Button>
				</div>
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
			toast.error('Ya need a name, mate!');
			return;
		}
		window.location.search = new URLSearchParams({ name: value }).toString();
	}

	function submitForm(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		submit();
	}

	function random() {
		window.location.search = 'random';
	}
}
